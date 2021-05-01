import fs from 'fs';
import load from 'lib/loader';
import {editableCampaign} from 'lib/store';

export default (campaign = {}) => {
    const out = {
        ...campaign,
        player_characters: campaign.player_characters ? campaign.player_characters.filter(v => !v.new) : [],
        npcs: campaign.npcs ? campaign.npcs.filter(v => !v.new) : [],
        locations: campaign.locations ? campaign.locations.filter(v => !v.new) : [],
    }

    const element = document.createElement('input');
    element.type="file";
    element.nwsaveas = "new_campaign.grpg";
    element.addEventListener('change', (e) => {
        if (e.path.length === 0) return;
        if (e.path[0].files.length === 0) return;
        const filePath = e.path[0].files[0].path;
        fs.writeFileSync(filePath, JSON.stringify(out, null, 4));
        load(e.path[0].files).then(c => {
            editableCampaign.set(c);
        })
    });
    element.click();
}