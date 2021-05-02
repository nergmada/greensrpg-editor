<script>
    export let campaign = null;
    export let inview = null;
    import DateTime from 'components/DateTime.svelte';
    import Dropdown from 'components/Dropdown.svelte';
    import MultiDropdown from 'components/MultiDropdown.svelte';

    $: inview = inview && campaign ? {
        name: campaign.name,
        description: campaign.description,
        time: campaign.time,
        current_map: campaign.current_map,
        maps: campaign.maps,
        acts: campaign.acts,
        intro: campaign.intro,
        author: campaign.author,
    } : {};
    $: campaign.acts = !campaign.acts || campaign.acts.length === 0 ? [''] : campaign.acts[campaign.acts.length - 1] !== '' ? [...campaign.acts, ''] : campaign.acts;
</script>

<div class="inner scrollable">
    <p>Title</p>
    <input bind:value={campaign.name} type="text" placeholder="Title" />
    <p>Author</p>
    <input bind:value={campaign.author} type="text" placeholder="Author" />
    <p>Description</p>
    <textarea bind:value={campaign.description} placeholder="Campaign Description" />
    <p>Game Start Date & Time</p>
    <DateTime bind:date={campaign.time} />
    <p>Start Map</p>
    <div style="color: initial;">
        <Dropdown 
            append="image"
            options={campaign.images.map(v => v.name)} 
            bind:value={campaign.current_map}
            inputStyles="background-color: #222; color: #fff;" />
    </div>
    <p>Maps</p>
    <div style="color: initial;">
        <MultiDropdown 
            append="image"
            options={campaign.images.map(v => v.name)} 
            bind:value={campaign.maps}
            inputStyles="background-color: #222; color: #fff;" />
    </div>
    <p>Acts</p>
    {#each campaign.acts as act, i}
        <p>Act {i + 1}</p>
        <input type="text" bind:value={act} />
    {/each}
    <h4>Location Music</h4>
    <Dropdown 
        append="music"
        options={campaign.music.map(v => v.name)} 
        bind:value={campaign.intro}
        inputStyles="background-color: #222; color: #fff;" />
    <p>Title Card Image</p>
    <div style="color: initial;">
        <Dropdown 
            append="image"
            options={campaign.images.map(v => v.name)} 
            bind:value={campaign.title_image}
            inputStyles="background-color: #222; color: #fff;" />
    </div>
</div>

<style>
    .inner {
        padding: 10px;
        overflow-y: auto;
        height: calc(100vh - 7rem);
        padding-bottom: 50px;
    }
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
</style>