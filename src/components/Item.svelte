<script>
    export let name = "";
    export let description = "";
    let editmode = false;
</script>
<div>
    {#if !editmode}
        <p>Name: {name}</p>
        <p>{description}</p>
    {:else}
        <input bind:value={name} placeholder={"name"} />
        <textarea bind:value={description} placeholder="description" />
    {/if}
</div>
<button disabled={name.length === 0} on:click={() => {
    editmode = !editmode;
}}>
    <span class="material-icons">
        {#if !editmode}
            edit
        {:else}
            save
        {/if}
    </span>
</button>

<style>
    div {
        display: inline-block;
    }
    input, textarea {
        width: 100%;
    }
    button {
        vertical-align: top;
    }
</style>