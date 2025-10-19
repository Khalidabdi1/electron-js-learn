import { createClient } from "@supabase/supabase-js";


const supabaseURL="https://mphkqdvutqdypazbqbrf.supabase.co"

const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1waGtxZHZ1dHFkeXBhemJxYnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MjMyMDYsImV4cCI6MjA3NjM5OTIwNn0.06wLY93fC26OmQVF41Jf968hcWjFSdLlarS8L35JEA4"


export const supabase=createClient(supabaseURL,supabaseKey)