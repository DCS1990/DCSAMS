const { Client } = require('pg');

const config = {
    user: 'postgres',
    host: 'db.bikvtscvufcqgiyclyhp.supabase.co',
    database: 'postgres',
    password: 'Masts@20261',
    port: 5432,
    ssl: { rejectUnauthorized: false }
};

const client = new Client(config);

async function addNameColumn() {
    console.log('Adding "name" column to assets table...');
    try {
        await client.connect();

        const query = "ALTER TABLE assets ADD COLUMN IF NOT EXISTS name TEXT;";
        console.log(`Executing: ${query}`);
        await client.query(query);

        console.log('Column "name" added successfully.');

    } catch (err) {
        console.error('Migration FAILED:', err);
    } finally {
        await client.end();
    }
}

addNameColumn();
