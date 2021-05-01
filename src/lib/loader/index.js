import fs from 'fs';
import path from 'path';
import json5 from 'json5';
import dataLoad from './data';
import assetLoad from './assets';

export default async function(files) {
    try {
        if (files.length === 0) return null;
        const file = files[0];
        const root = path.dirname(file.path);
        const data = await fs.promises.readFile(file.path).then(v => json5.parse(v));
        const campaign = await assetLoad(await dataLoad(data, root), root);
        return {
            ...campaign,
            root,
        };
    } catch(err) {
        throw err;
    }

}