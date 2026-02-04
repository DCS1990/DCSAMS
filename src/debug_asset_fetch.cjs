const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bikvtscvufcqgiyclyhp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpa3Z0c2N2dWZjcWdpeWNseWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NTcxMTQsImV4cCI6MjA4NTQzMzExNH0.iNcxNatweZnysyybDFWA7F9N-LA3P9Ao5R4CoC93y1c';
const supabase = createClient(supabaseUrl, supabaseKey);

async function testAssetFetch() {
    console.log('Testing Asset Fetch (AssetService Logic)...');

    // Full AssetService query (Disambiguated user relation)
    console.log('Testing Full AssetService Query...');
    const query = '*, assigned_to:users!assets_assigned_to_id_fkey(*), status:status_labels(*), model:asset_models(*), category:categories(*), location:locations(*), sbu:sbus(*), department:departments(*)';

    const { data, error } = await supabase.from('assets').select(query).limit(5);

    if (error) {
        console.error('Fetch FAILED:', error);
        return;
    }

    console.log(`Fetched ${data.length} assets.`);
    if (data.length > 0) {
        const asset = data[0];
        console.log('Sample Asset Structure:', JSON.stringify(asset, null, 2));

        // Check specifically for expected objects
        console.log('Type checks:');
        console.log('sbu is object?', typeof asset.sbu === 'object' && asset.sbu !== null);
        console.log('model is object?', typeof asset.model === 'object' && asset.model !== null);
        console.log('status is object?', typeof asset.status === 'object' && asset.status !== null);

        // existing text columns might interfere?
        // if "sbu" key exists, does it hold the object or the text column?
        // In PostgREST, embedded resource usually overrides column name if aliased to same name, OR it errors.
    } else {
        console.log('No assets found.');
    }
}

testAssetFetch();
