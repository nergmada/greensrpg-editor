<script>
    export let leaves = [];
    let title = "";
    let description = "";
</script>

<button disabled={!title || !description} on:click={() => {
    leaves = [
        ...leaves,
        {
            title,
            description,
            children: [],
        }
    ]
}}>Add</button>
<input bind:value={title} type="text" placeholder="title" />
<textarea bind:value={description} placeholder="description" />

<style>
    button {
        margin: 0;
        width: 100%;
        box-sizing: border-box;
    }
    input, textarea {
        width: 100%;
    }
</style>