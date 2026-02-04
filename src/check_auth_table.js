import { createClient } from '@supabase/supabase-js';

const url = 'https://bikvtscvufcqgiyclyhp.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpa3Z0c2N2dWZjcWdpeWNseWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NTcxMTQsImV4cCI6MjA4NTQzMzExNH0.iNcxNatweZnysyybDFWA7F9N-LA3P9Ao5R4CoC93y1c';

const supabase = createClient(url, key);

async function checkAuthUsersTable() {
    try {
        console.log("=== Checking auth_users Table Structure ===");
        
        // Try to see what columns auth_users has
        const { data: authUsers, error: authError } = await supabase
            .from('auth_users')
            .select('*')
            .limit(1);
            
        if (authError) {
            console.error("auth_users SELECT error:", authError.message);
        } else {
            console.log("auth_users SELECT successful");
            if (authUsers && authUsers.length > 0) {
                console.log("auth_users columns:", Object.keys(authUsers[0]));
            } else {
                console.log("auth_users table is empty");
            }
        }
        
        // Check if there are any existing users in either table
        console.log("\n=== Checking for Existing Records ===");
        
        const { data: existingUsers, error: usersError } = await supabase
            .from('users')
            .select('count')
            .limit(1);
            
        if (usersError) {
            console.log("Cannot access users table:", usersError.message);
        } else {
            console.log("Users table accessible but may have RLS restrictions");
        }
        
        const { data: existingAuthUsers, error: authUsersError } = await supabase
            .from('auth_users')
            .select('count')
            .limit(1);
            
        if (authUsersError) {
            console.log("Cannot access auth_users table:", authUsersError.message);
        } else {
            console.log("auth_users table accessible");
        }
        
        // Try a different approach - maybe we need to use RPC or there's a specific function
        console.log("\n=== Looking for User Creation Functions ===");
        
        // Check if there are any stored procedures
        const { data: functions, error: funcError } = await supabase
            .rpc('list_functions');
            
        if (funcError) {
            console.log("No RPC functions available or cannot access them");
        } else {
            console.log("Available functions:", functions);
        }
        
    } catch (e) {
        console.error("Check error:", e);
    }
}

checkAuthUsersTable();