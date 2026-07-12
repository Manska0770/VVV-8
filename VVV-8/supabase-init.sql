-- Supabase init for VVV-8 profiles
-- Creates `profiles` table and RLS policies

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

-- Enable row level security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT so profiles are visible to everyone
CREATE POLICY IF NOT EXISTS public_select_profiles ON public.profiles
  FOR SELECT USING (true);

-- Allow INSERT from the public web app
CREATE POLICY IF NOT EXISTS insert_profiles_public ON public.profiles
  FOR INSERT WITH CHECK (true);

-- Allow UPDATE for authenticated owners or anonymous public rows
CREATE POLICY IF NOT EXISTS update_profiles_public ON public.profiles
  FOR UPDATE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'))
  WITH CHECK (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));

-- Allow DELETE for authenticated owners or anonymous public rows
CREATE POLICY IF NOT EXISTS delete_profiles_public ON public.profiles
  FOR DELETE USING (owner = auth.uid() OR (owner IS NULL AND auth.role() = 'anon'));
