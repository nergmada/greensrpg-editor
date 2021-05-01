<script>
    import {abilities} from 'lib/store';
    import Dropdown from 'components/Dropdown.svelte';
    export let list = [];
    let addMode = false;
    let value = null;
</script>

{#if !addMode}
    <button on:click={() => {
        addMode = true;
    }}>
    Add from Abilities List
    </button>
{:else}
    <Dropdown options={$abilities.map(v => v.name)} bind:value />
    <button disabled={!value} on:click={() => {
        list = [...list, $abilities.find(v => v.name === value)];
        value = null;
        addMode = false;
    }}>Add</button>
    <button disabled={!value} on:click={() => {
        addMode = false;
    }}>Cancel</button>
{/if}
