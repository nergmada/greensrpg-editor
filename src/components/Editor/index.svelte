<script>
    import Overview from './Overview.svelte';
    import Characters from './Characters';
    import Locations from './Locations';
    import Viewer from './Viewer.svelte';
    import loadAssets from 'lib/loader/assets';
    export let campaign = null;
    let active = 0;
    const titles = [
        'Overview', 
        'Characters', 
        'Locations', 
        'NPCs',
        'Reload Assets'
    ];
    let inview = {};
</script>

<div class="edit">
    <div class="menu scrollable">
        {#each titles as title, i}
            <button class:active={active === i} on:click={() => {
                if (i === 4) loadAssets(campaign, campaign.root).then(c => {
                    campaign = c;
                }) 
                else active = i;
            }}>{title}</button>
        {/each}
    </div>

    <div class="scrollable">
        {#if active === 0}
            <Overview bind:campaign bind:inview />
        {:else if active === 1}
            <Characters bind:characters={campaign.characters} bind:inview />
        {:else if active === 2}
            <Locations 
                bind:locations={campaign.locations} 
                bind:inview
                bind:images={campaign.images}
                bind:music={campaign.music} />
        {/if}
    </div>
</div>
<div class="viewer">
    <Viewer bind:inview />
</div>

<style>
    .menu {
        width: 100%;
        border-bottom: 1px solid #fff;
        overflow-x: auto;
        white-space: nowrap;
    }
    .viewer {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
    }

    .edit {
        display: inline-block;
        width: 49%;
        vertical-align: top;
        border-right: 1px solid #fff;
        height: 100%;
    }
    .active {
        background-color: #444444;
    }
    button {
        background: none;
        margin: 0;
        text-align: left;
        border-radius: 0;
    }
    button:hover {
        box-shadow: none;
        background-color: #444444;
    }
</style>