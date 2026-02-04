const { Client } = require('pg');

// Configuration
const config = {
    user: 'postgres',
    host: 'db.bikvtscvufcqgiyclyhp.supabase.co',
    database: 'postgres',
    password: 'Masts@20261',
    port: 5432,
    ssl: { rejectUnauthorized: false }
};

const client = new Client(config);

async function runMigration() {
    console.log('Connecting to database...');
    try {
        await client.connect();
        console.log('Connected!');

        const sql = `
      -- 1. Add Missing Columns to 'users' table
      ALTER TABLE users ADD COLUMN IF NOT EXISTS phone TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS manager TEXT;
      
      -- Add count columns if they don't exist
      ALTER TABLE users ADD COLUMN IF NOT EXISTS licenses INTEGER DEFAULT 0;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS assets INTEGER DEFAULT 0;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS accessories INTEGER DEFAULT 0;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS consumables INTEGER DEFAULT 0;
      
      -- 2. Fix RLS (Security Policies)
      ALTER TABLE users ENABLE ROW LEVEL SECURITY;
      
      -- Drop potential conflicting policies
      DROP POLICY IF EXISTS "Public Access" ON users;
      DROP POLICY IF EXISTS "Enable all access" ON users;
      DROP POLICY IF EXISTS "Enable all access for all users" ON users;
      DROP POLICY IF EXISTS "Enable insert for all users" ON users;
      
      -- Create Permissive Policy
      CREATE POLICY "Public Access" ON users FOR ALL USING (true) WITH CHECK (true);
    `;

        console.log('Running SQL...');
        await client.query(sql);
        console.log('Migration SUCCESS! Columns added and RLS fixed.');
    } catch (err) {
        console.error('Migration FAILED:', err);
    } finally {
        await client.end();
    }
}

runMigration();
