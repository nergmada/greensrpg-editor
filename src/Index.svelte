<script>
    import {editableCampaign} from 'lib/store';
    import Editor from './pages/Editor.svelte';
    import Load from './pages/Load.svelte';
    import Tree from './pages/Tree.svelte';
</script>
{#if $editableCampaign}
    <Editor bind:campaign={$editableCampaign} />
{:else}
    <Load />
{/if}