// plugins/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://chybaedpuehinthhhbkz.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoeWJhZWRwdWVoaW50aGhoYmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIyNzIsImV4cCI6MjAzMjIwODI3Mn0.VvL4x0dDpodGo4CGeF05JGeOS1OeJLYAUX9echZKPiI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
