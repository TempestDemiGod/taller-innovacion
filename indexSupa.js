// import { createClient } from '@supabase/supabase-js'
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// Create a single supabase client for interacting with your database

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjb2d6ZHlxcWRtZ2hraXR6dHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwOTU4MTgsImV4cCI6MjAxMzY3MTgxOH0.3QZypQc1CalOCdQ1n5psFI4Oq7hBDxVnLko_gP9oYOY"


// import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vcogzdyqqdmghkitztyk.supabase.co'
const token = 'sbp_b81810d086251793ae2ee93d99a4d2e861503074'
const supabase = createClient(supabaseUrl, supabaseKey,token)

async function registerUser(){
    const { data: User , error } = await supabase
    .from('User')
    .insert([
    { nombre: 'goku',apellido: 'god asesor',
    email: 'supersajan@email.com', password:'passwordTest4321'  },
    ])
    .select()
}

// supabase.auth.signInWithOAuth({
//     provider: 'google',
//   })

// async function logeoGoogle(){
//     const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           queryParams: {
//             access_type: 'offline',
//             prompt: 'consent',
            
//           },
//         },
//       })
// }
// logeoGoogle()

