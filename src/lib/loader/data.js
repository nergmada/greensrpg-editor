import path from 'path';
import fs from 'fs';
import json5 from 'json5';
// import * as assets from 'campaigns/assets';

async function do_array(array, root) {
    const result = await Promise.all(array.map(v => {
        if (typeof v === 'string') {
            return load({value: v}, root).then(o => {
                return o.value;
            });
        }
        if (Array.isArray(v)) {
            return do_array(v, root);
        }
        if (typeof v === 'object') {
            return load(v, root);
        }
        return v;
    }));
    return result;
}


export async function load(json, root) {
    const keys = Object.keys(json);
    let result = {
        ...json,
    };
    for (let i = 0; i < keys.length; ++i) {
        const k = keys[i];
        if (typeof json[k] === 'string' && json[k].startsWith("json5:")) {
            const textpath = path.join(root, json[k].slice(7));
            const jsonData = json5.parse(await fs.promises.readFile(textpath, 'utf-8'));
            if (Array.isArray(jsonData)) result[k] = await do_array(jsonData, root);
            else result[k] = await load(jsonData, root);
        }
        else if (typeof json[k] === 'string' && json[k].startsWith("file:")) {
            const textpath = path.join(root, json[k].slice(6));
            result[k] = await fs.promises.readFile(textpath, 'utf-8');
        }
        else if (Array.isArray(json[k])) {
            result[k] = await do_array(json[k], root);
        }
        else if (typeof json[k] === 'object') {
            result[k] = await load(json[k], root);
        }
    }
    return result;
}


export default load;