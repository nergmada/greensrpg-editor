<script>
    import Leaf from './Leaf.svelte';
    export let leaves = [];
    export let layer = [];
    export let selected = -1;
</script>
<div class="layer scrollable" class:active={selected === -1}>
    {#if selected === -1}
        {#each layer as leafId }
            <div class="lf">
                <Leaf deletable={true} data={leaves[leafId]} on:delete={() => {
                    layer = layer.filter(v => v !== leafId);
                }} on:click={() => {
                    selected = leafId;
                }} />
            </div>
        {/each}
        {#if layer.length === 0} 
            <h3>No decisions added</h3>
        {/if}
    {:else}
        <div class="lf">
            <Leaf data={leaves[selected]} on:click={() => {
                selected = -1;
            }} />
        </div>
    {/if}
</div>

<style>
    .layer {
        overflow-y: auto;
        white-space: nowrap;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
        text-align: center;
    }
    .lf {
        width: 20vw;
        display: inline-block;
        vertical-align: top;
    }
    .active {
        border: 2px solid #00f;
    }
</style>