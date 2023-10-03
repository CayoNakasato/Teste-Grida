import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rrwachssijquieilblet.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyd2FjaHNzaWpxdWllaWxibGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMTQzNjAsImV4cCI6MjAwNzY5MDM2MH0.jEui15bZjcgRdquKEoaSYDWHhiA5zm7KBuZxXTUiP4g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})

export const supabaseStorageURL =
  'https://rrwachssijquieilblet.supabase.co/storage/v1/object/public/uploads'