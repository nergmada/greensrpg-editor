<script>
    import Editor from './Editor.svelte';
    import template from 'lib/templates/npc';
    export let npcs = [];
    export let images = [];
    export let music = [];
    export let inview = {};
    let active = 0;
    npcs = [...(npcs ? npcs : []), {
        new: true,
    }]
    $: inview = npcs[active];
</script>
<div>
    <div class="menurow scrollable">
        {#each npcs.filter(c => !c.new) as c, i}
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
        <button disabled={active === npcs.length - 1} class="menu" class:active={active === npcs.length - 1} on:click={() => {
            active = npcs.length - 1;
        }}>New NPC</button>
    </div>
    <div class="inner scrollable">
        {#if npcs[active].new}
            <p>Name</p>
            <input bind:value={npcs[active].name} type="text" placeholder="Name" />
            <button disabled={npcs[active].name === 0} on:click={() => {
                npcs = [
                    ...npcs.slice(0, -1),
                    {
                        ...JSON.parse(JSON.stringify(template)),
                        ...npcs[active],
                        new: undefined,
                    }, {
                        new: true,
                    }
                ]
                active = npcs.length - 2;
            }}>Save</button>
        {:else}
            <Editor bind:npc={npcs[active]} bind:images bind:music />
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