<script>
    import Select from 'svelte-select';
    export let options = [];
    export let value = options[0];
    const items = options.map(v => ({
        value: v,
        label: v,
    }))
    let selectedValue = [];
    $: {
        value = selectedValue ? selectedValue.map(v => v.value) : [];
    }
</script>
<div style="color: initial;">
    <Select {items} bind:selectedValue isMulti={true} />
</div>