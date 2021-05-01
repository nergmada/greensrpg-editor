import {writable} from 'svelte/store';
import loadAbilities from 'lib/abilities';

export const editableCampaign = writable(null);
export const abilities = writable({});
loadAbilities().then(a => {
    abilities.set(a);
});


editableCampaign.subscribe(v => console.log(v));