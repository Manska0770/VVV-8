-- Migration 0001: create profiles table with RLS policies

CREATE TABLE IF NOT EXISTS public.profiles (
  id text PRIMARY KEY,
  name text,
  age int,
  city text,
  bio text,
  photo text,
  avatar text,
  tags jsonb,
  gender text,
  lat numeric,
  lon numeric,
  distance text,
  telegram_id text,
  telegram_username text,
  telegram_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  owner uuid
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS public_select_profiles ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS insert_profiles_public ON public.profiles
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS update_profiles_public ON public.profiles
  FOR UPDATE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'))
  WITH CHECK (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));

CREATE POLICY IF NOT EXISTS delete_profiles_public ON public.profiles
  FOR DELETE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));
