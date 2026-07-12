-- Migration 0002: add Telegram fields and update public profile policies

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS telegram_id text,
  ADD COLUMN IF NOT EXISTS telegram_username text,
  ADD COLUMN IF NOT EXISTS telegram_name text,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

CREATE UNIQUE INDEX IF NOT EXISTS profiles_telegram_id_unique_idx ON public.profiles (telegram_id) WHERE telegram_id IS NOT NULL;

-- Recreate public insert/update/delete policies for anonymous static web clients.
DROP POLICY IF EXISTS insert_profiles_auth ON public.profiles;
DROP POLICY IF EXISTS update_profiles_owner ON public.profiles;
DROP POLICY IF EXISTS delete_profiles_owner ON public.profiles;
DROP POLICY IF EXISTS insert_profiles_public ON public.profiles;
DROP POLICY IF EXISTS update_profiles_public ON public.profiles;
DROP POLICY IF EXISTS delete_profiles_public ON public.profiles;

CREATE POLICY IF NOT EXISTS public_select_profiles ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS insert_profiles_public ON public.profiles
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS update_profiles_public ON public.profiles
  FOR UPDATE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'))
  WITH CHECK (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));

CREATE POLICY IF NOT EXISTS delete_profiles_public ON public.profiles
  FOR DELETE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));
