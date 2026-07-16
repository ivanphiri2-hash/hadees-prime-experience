import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <motion.a
      href="https://wa.me/27000000000?text=Hi%20Hadees%20Trading%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 180, damping: 20 }}
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.16_150)] pl-3 pr-4 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_50px_rgba(16,185,129,0.5)] transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-4" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}
