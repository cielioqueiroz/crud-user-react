import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from './config/environments.json'

const supabaseURL = SUPABASE_URL
const supabaseKey = SUPABASE_KEY
const supabase = createClient(supabaseURL, supabaseKey)

export default supabase
