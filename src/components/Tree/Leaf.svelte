<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let expanded = false;
    export let deletable = false;

    export let data = {
        title: "Level 4 Lockpick",
        description: "This is a brief description of a task within the campaign, I'm just placing it here for now so that we can see how it formats "
    };
</script>
<div class="leaf" on:click>
    <h4>{data.title}</h4>
    <p>Subsequent Decisions: {data.children.length}</p>
    {#if data.description.length >= 50}
        <p>{expanded ? data.description : `${data.description.slice(0, 50)}...`}</p>
        <button on:click={(e)=> { 
            expanded = !expanded;
            e.stopPropagation(); 
        }}>{expanded ? 'less':'more'}</button>
    {:else}
        <p>{data.description}</p>
    {/if}
    {#if deletable}
        <button on:click={() => dispatch('delete')}>
            <span class="material-icons">
                delete
            </span>
        </button>
    {/if}
</div>

<style>
    .leaf {
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid #fff;
        font-size: 0.9;
    }
    .leaf:hover {
        cursor: pointer;
    }
    .leaf > p {
        margin-bottom: 0;
        text-align: justify;
        white-space: normal;
    }
    .leaf > h4 {
        text-align: center;
        margin: 0;
        white-space: normal;
    }
    button {
        background: none;
        color: #0077ff;
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }
    button:hover {
        box-shadow: none;
    }
</style>