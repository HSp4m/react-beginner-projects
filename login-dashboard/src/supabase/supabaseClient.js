import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_APP_URL;
const supabaseKey = import.meta.env.SUPABASE_APP_ANON_KEY;
console.log(supabaseUrl)
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
