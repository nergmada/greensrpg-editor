<script>
    import ItemList from 'components/ItemList.svelte';
    import MultiDropdown from 'components/MultiDropdown.svelte';
    import Dropdown from 'components/Dropdown.svelte';
    export let location = null;
    export let images = null;
    export let music = null;
</script>

<h4>Name</h4>
<input bind:value={location.name} type="text" placeholder="Name" />

<h4>Description</h4>
<textarea bind:value={location.description} placeholder="location Description" />

<h4>GM Notes</h4>
<textarea bind:value={location.private_description} placeholder="GM Notes" />

<h4>Images</h4>
<MultiDropdown 
    options={images.map(v => v.name)} 
    bind:value={location.images}
    inputStyles="background-color: #222; color: #fff;" />

<h4>Location Music</h4>
<Dropdown 
    options={music.map(v => v.name)} 
    bind:value={location.audio}
    inputStyles="background-color: #222; color: #fff;" />


<h4>Act</h4>
<input bind:value={location.act} type="number" />

<h4>Features</h4>
<ItemList bind:list={location.features} />

<style>
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
</style>