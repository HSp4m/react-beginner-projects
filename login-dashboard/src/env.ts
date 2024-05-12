import { z } from 'zod'

const envSchema = z.object({
  SUPABASE_APP_URL: z.string().url(),
  SUPABASE_APP_ANON_KEY: z.string()
});

export const env = envSchema.parse(process.env)