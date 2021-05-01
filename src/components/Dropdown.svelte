<script>
    import Select from 'svelte-select';
    export let options = [];
    export let value = options[0];
    const items = options.map(v => ({
        value: v,
        label: v,
    }))
    let selectedValue = items[0];
    $: {
        value = selectedValue.value;
    }
</script>
<div style="color: initial;">
    <Select {items} bind:selectedValue />
</div>
