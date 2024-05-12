import { createClient } from "@supabase/supabase-js";
import { env } from '../env'

const supabaseUrl = env.SUPABASE_APP_URL;
const supabaseKey = env.SUPABASE_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
