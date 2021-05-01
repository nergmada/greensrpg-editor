<script>
    import Select from 'svelte-select';
    export let options = [];
    export let value = options[0];
    export let append = '';
    const items = options.map(v => ({
        value: v,
        label: v,
    }))
    let selectedValue = items.length > 0 ? items[0] : null;
    $: {
        if (selectedValue && selectedValue.value) value = `${append}${append.length > 0 ? ':' : ''}${selectedValue.value}`;
    }
</script>
<div style="color: initial;">
    <Select {items} bind:selectedValue />
</div>
