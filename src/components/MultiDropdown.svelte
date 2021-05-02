<script>
    import Select from 'svelte-select';
    export let options = [];
    export let value = [];
    export let append = '';
    const items = options.map(v => ({
        value: v,
        label: v,
    }))
    let selectedValue = value.map(v => v.replace(`${append}${append.length > 0 ? ':' : ''}`, ""));
    $: {
        value = selectedValue ? selectedValue.map(v => `${append}${append.length > 0 ? ':' : ''}${v.value}`) : [];
    }
</script>
<div style="color: initial;">
    <Select {items} bind:selectedValue isMulti={true} />
</div>