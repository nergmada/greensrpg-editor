import fs from 'fs';


async function get(root, type) {
    try {
        const exists = await fs.promises.stat(`${root}/assets/${type}`);
    } catch(err) {
        await fs.promises.mkdir(`${root}/assets/${type}`)
        return [];
    }
    const assets = await fs.promises.readdir(`${root}/assets/${type}`);
    return await Promise.all(assets.map(v => ({
        name: v.split('.')[0],
        path: `${root}/assets/${type}/${v}`,
        relative: `./assets/${type}/${v}`
    })));
}

export default async function(json, root) {
    try {
        await fs.promises.stat(`${root}/assets`);
    } catch(err) {
        await fs.promises.mkdir(`${root}/assets`);
    }
    return {
        ...json,
        images: await get(root, 'images'),
        music: await get(root, 'music')
    }
}