-- Add level column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS level text DEFAULT 'Débutant';

-- Add comment
COMMENT ON COLUMN public.profiles.level IS 'User level: Débutant, Intermédiaire, or Avancé';