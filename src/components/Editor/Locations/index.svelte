<script>
    import Editor from './Editor.svelte';
    import template from 'lib/templates/location';
    export let locations = [];
    export let images = [];
    export let music = [];
    export let inview = {};
    let active = 0;
    locations = [...(locations ? locations : []), {
        new: true,
    }]
    $: inview = locations[active];
</script>
<div>
    <div class="menurow scrollable">
        {#each locations.filter(c => !c.new) as c, i}
            {#key active}
                <button disabled={active === i} class="menu" class:active={active === i} on:click={() => {
                    active = i;
                }}>
                    {#key c.name}
                        {c.name}
                    {/key}
                </button>
            {/key}
        {/each}
        <button disabled={active === locations.length - 1} class="menu" class:active={active === locations.length - 1} on:click={() => {
            active = locations.length - 1;
        }}>New Location</button>
    </div>
    <div class="inner scrollable">
        {#if locations[active].new}
            <p>Name</p>
            <input bind:value={locations[active].name} type="text" placeholder="Name" />
            <button disabled={!locations[active].name || locations[active].name.length === 0} on:click={() => {
                locations = [
                    ...locations.slice(0, -1),
                    {
                        ...JSON.parse(JSON.stringify(template)),
                        ...locations[active],
                        new: undefined,
                    }, {
                        new: true,
                    }
                ]
                active = locations.length - 2;
            }}>Save</button>
        {:else}
            <Editor bind:location={locations[active]} bind:images bind:music />
        {/if}
    </div>
</div>


<style>
    .inner {
        padding: 10px;
        overflow-y: auto;
        height: calc(100vh - 7rem);
        padding-bottom: 50px;
    }
    .menurow {
        border-bottom: 1px solid #fff;
        overflow-x: auto;
        white-space: nowrap;
    }
    .menu {
        background: none;
        margin: 0;
        text-align: left;
        border-radius: 0;
    }
    .menu:hover {
        box-shadow: none;
        background-color: #444444;
    }
    .active {
        background-color: #444444;
    }
    input {
        width: 100%;
    }
</style>