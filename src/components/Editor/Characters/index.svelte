<script>
    import sha256 from 'js-sha256';
    import Editor from './Editor.svelte';
    import template from 'lib/templates/character';
    export let characters = [];
    export let images = [];
    export let inview = {};
    let active = 0;
    characters = [...(characters ? characters : []), {
        new: true,
    }]
    $: characters = characters.map(c => ({
        ...c,
        player_name: c.new ? null : sha256.create().update(c.name + new Date()).hex().slice(0, 8)
    }))
    $: inview = characters[active];
</script>
<div>
    <div class="menurow scrollable">
        {#each characters.filter(c => !c.new) as c, i}
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
        <button disabled={active === characters.length - 1} class="menu" class:active={active === characters.length - 1} on:click={() => {
            active = characters.length - 1;
        }}>New Player Character</button>
    </div>
    <div class="inner scrollable">
        {#if characters[active].new}
            <p>Name</p>
            <input bind:value={characters[active].name} type="text" placeholder="Name" />
            <button disabled={!characters[active].name || characters[active].name.length === 0} on:click={() => {
                characters = [
                    ...characters.slice(0, -1),
                    {
                        ...JSON.parse(JSON.stringify(template)),
                        ...characters[active],
                        new: undefined,
                    }, {
                        new: true,
                    }
                ]
                active = characters.length - 2;
            }}>Save</button>
        {:else}
            <Editor bind:images bind:character={characters[active]} />
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