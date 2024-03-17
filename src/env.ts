
import { z } from 'zod'


const envSchema = z.object({
  VITE_API_URL: z.string().default('/'),
  MODE: z.enum(['production', 'development', 'test']),
})

export const env = envSchema.parse(import.meta.env)