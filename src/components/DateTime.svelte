<script>
    export let date = new Date();
    let dt = new Date(date * 1000).toISOString().split('T')[0];
    let t = `${new Date(date * 1000).getUTCHours()}:${new Date(date * 1000).getUTCMinutes()}`;
    $: {
        date = Date.parse(`${dt}T${t}:00`)/1000;
    }
</script>

<input type="date" bind:value={dt} />
<input type="time" bind:value={t} />