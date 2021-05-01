import fs from 'fs';
import path from 'path';
export default async function() {
    const abilitiesAvailable = await fs.promises.stat('./build/all_abilities');
    if (!abilitiesAvailable) return {};
    const allAbilitiesFiles = await fs.promises.readdir('./build/all_abilities');
    return await Promise.all(allAbilitiesFiles.map(async v => ({
        name: path.basename(v).split(".")[0].replaceAll("_", " "),
        description: await fs.promises.readFile(`./build/all_abilities/${v}`, 'utf-8')
    })));
}