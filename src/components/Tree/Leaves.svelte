<script>
    import Leaf from './Leaf.svelte';
    export let leaves = [];
    export let currentLayer = [];
</script>
<div class="leaves scrollable">
    {#each leaves as leaf, i}
        <Leaf on:click={() => {
            if (currentLayer.includes(i)) return;
            currentLayer = [
                ...currentLayer,
                i
            ]
        }} bind:data={leaf} />
    {/each}
</div>
<style>
    .leaves {
        padding: 10px;
        overflow-y: auto;
        height: calc(100vh - 250px);
    }
</style>