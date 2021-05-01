<script>
    import Item from './Item.svelte';
    export let list = [];
</script>

<ul>
    {#each list as item, i}
        <li>
            <Item bind:name={item.name} bind:description={item.description} />
            <button on:click={() => {
                list = list.filter((v, l) => l !== i);
            }}>
                <span class="material-icons">
                    delete
                </span>
            </button>
        </li>
    {/each}
</ul>
<button on:click={() => {
    list = [...list, {
        name: "New Item",
        description: ""
    }]
}}>Add</button>

<style>
    button {
        vertical-align: top;
    }
</style>