import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpuvsblbkbxpevtyvttz.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdXZzYmxia2J4cGV2dHl2dHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTAwNDIsImV4cCI6MjA3MDUyNjA0Mn0.5fMiLBQQ1uOCVF_sde6Wc5orYJWGEpyLL9Ae76G27mI'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);
