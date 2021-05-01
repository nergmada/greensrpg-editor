import fs from 'fs';


async function get(root, type) {
    const exists = await fs.promises.stat(`${root}/assets/${type}`);
    if (!exists) {
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
    const assetsExist = await fs.promises.stat(`${root}/assets`);
    if (!assetsExist) {
        await fs.promises.mkdir(`${root}/assets`);
    }
    return {
        ...json,
        images: await get(root, 'images'),
        music: await get(root, 'music')
    }
}