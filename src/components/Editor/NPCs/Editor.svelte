<script>
    import Pool from './Pool.svelte';
    import ItemList from 'components/ItemList.svelte';
    import Abilities from './Abilities.svelte';
    export let npc = null;
    if (!npc.stats) npc.stats = [];
</script>

<h4>Name</h4>
<input bind:value={npc.name} type="text" placeholder="Name" />

<h4>Hostile?</h4>
<input type="checkbox" bind:value={npc.hostile} />

<h4>Description</h4>
<textarea bind:value={npc.bio} placeholder="npc Description" />

<h4>GM Notes</h4>
<textarea bind:value={npc.private_bio} placeholder="GM Notes" />



<h4>Level</h4>
<input bind:value={npc.level} type="number" />

<h4>Pools</h4>
<div style="display: table;">
    {#each Object.keys(npc.stats) as stat}
        <Pool name={stat} bind:max={npc.stats[stat].max} bind:current={npc.stats[stat].current} />
    {/each}
</div>

<h4>Armor</h4>
<input bind:value={npc.armor} type="number" />

<h4>Inventory</h4>
<ItemList bind:list={npc.inventory} />

<h4>Abilities</h4>
<ItemList bind:list={npc.abilities} />
<Abilities bind:list={npc.abilities} />

<style>
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
</style>