
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_admin(UUID) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.grant_super_admin_on_signup() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO authenticated, service_role;

DROP POLICY "Anyone can request a demo" ON public.demo_bookings;
CREATE POLICY "Anyone can request a demo" ON public.demo_bookings
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 2 AND 120
    AND length(email) BETWEEN 5 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(company) BETWEEN 1 AND 200
    AND use_case IN ('ops','sales','finance','compliance','custom')
    AND (notes IS NULL OR length(notes) <= 2000)
  );
