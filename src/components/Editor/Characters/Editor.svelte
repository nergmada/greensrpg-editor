<script>
    import Pool from './Pool.svelte';
    import Type from './Type.svelte';
    import Edge from './Edge.svelte';
    import ItemList from 'components/ItemList.svelte';
    import MultiDropdown from 'components/MultiDropdown.svelte';
    import Abilities from './Abilities.svelte';
    
    export let character = null;
    export let images = [];
    
    if (!character.stats) character.stats = [];
</script>

<h4>Name</h4>
<input bind:value={character.name} type="text" placeholder="Name" />

<h4>Short Description</h4>
<input bind:value={character.short_description} type="text" placeholder="Short Description" />

<h4>Description</h4>
<textarea bind:value={character.bio} placeholder="Character Description" />

<h4>GM Notes</h4>
<textarea bind:value={character.private_bio} placeholder="GM Notes" />

<h4>Type</h4>
<Type bind:type={character.type} />

<h4>Tier</h4>
<input bind:value={character.tier} type="number" />

<h4>Edge</h4>
<Edge bind:edge={character.edge} />

<h4>Pools</h4>
<div style="display: table;">
    {#each Object.keys(character.stats) as stat}
        <Pool name={stat} bind:max={character.stats[stat].max} bind:current={character.stats[stat].current} />
    {/each}
</div>

<h4>Armor</h4>
<input bind:value={character.armor} type="number" />

<h4>Effort</h4>
<input bind:value={character.effort} type="number" />

<h4>Inventory</h4>
<ItemList bind:list={character.inventory} />

<h4>Abilities</h4>
<ItemList bind:list={character.abilities} />
<Abilities bind:list={character.abilities} />

<h4>Images</h4>
<MultiDropdown 
    append="image"
    options={images.map(v => v.name)} 
    bind:value={character.images}
    inputStyles="background-color: #222; color: #fff;" />
<h4>Player Color</h4>
<input type="color" bind:value={character.color} />

<style>
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
</style>