import { useEffect, useRef, useState } from "react";

declare global { interface Window { google?: any; __hadeesMapInit?: () => void; } }

let scriptPromise: Promise<void> | null = null;
function loadMaps(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
    const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;
    if (!key) return reject(new Error("Missing Google Maps browser key"));
    window.__hadeesMapInit = () => resolve();
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__hadeesMapInit${channel ? `&channel=${channel}` : ""}`;
    s.async = true; s.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export function GoogleSatelliteMap({ query, className = "h-80 w-full rounded-2xl overflow-hidden border border-border" }: { query: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadMaps()
      .then(() => {
        if (cancelled || !ref.current) return;
        const g = window.google;
        const geocoder = new g.maps.Geocoder();
        geocoder.geocode({ address: query }, (results: any, status: string) => {
          if (cancelled) return;
          const loc = status === "OK" && results?.[0] ? results[0].geometry.location : new g.maps.LatLng(-25.8652, 25.6442);
          const map = new g.maps.Map(ref.current!, {
            center: loc, zoom: 17, mapTypeId: "hybrid", tilt: 45, streetViewControl: true, fullscreenControl: true,
          });
          new g.maps.Marker({ position: loc, map, title: "HADEES Trading — Mahikeng" });
        });
      })
      .catch((e) => setErr(e.message));
    return () => { cancelled = true; };
  }, [query]);

  if (err) return <div className={className + " grid place-items-center text-sm text-muted-foreground"}>{err}</div>;
  return <div ref={ref} className={className} aria-label="Satellite map of HADEES Trading, Mahikeng" />;
}
