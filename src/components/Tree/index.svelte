<script>
    import Layer from './Layer.svelte';
    import Leafer from './Leafer.svelte';
    import Leaves from './Leaves.svelte';
    let path = [-1];
    export let tree = {
        root: [],
        leaves: []
    };
    export let inview = tree;
    $: inview = tree;
    const validatePath = (path, index = 0) => {
        //empty path is inherently valid
        console.log(path);
        console.log(index);
        if (path.length <= index) return path;
        console.log(`does leaf ${path[index-1]} contain child ${path[index]}`);
        if (index === 0 || tree.leaves[path[index-1]].children.includes(path[index])) return validatePath(path, index + 1);
        else return path.slice(0, index);
    };
    $: {
        tree.leaves;
        const findFirstUnselected = path.findIndex((v) => v === -1);
        if (findFirstUnselected === -1) path = [...validatePath(path), -1];
        else path = [...validatePath(path.slice(0, findFirstUnselected)), -1];
    }
</script>
<div class="tree scrollable">
    {#each path as step, i}
        {#if i === 0}
            <Layer bind:layer={tree.root} bind:leaves={tree.leaves} bind:selected={step} />
        {:else}
            <Layer bind:layer={tree.leaves[path[i-1]].children} bind:leaves={tree.leaves} bind:selected={step} />
        {/if}
    {/each}
    <div id="anchor"></div>
</div>
<div class="right-col">
    <div class="adder">
        <Leafer bind:leaves={tree.leaves} />
    </div>
    {#key path.length}
        {#if path.length > 1}
            <Leaves bind:leaves={tree.leaves} bind:currentLayer={tree.leaves[path[path.length - 2]].children} />
        {:else}
            <Leaves bind:leaves={tree.leaves} bind:currentLayer={tree.root} />
        {/if}
    {/key}
</div>

<style>
    .tree, .right-col {
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        margin: 0;
        vertical-align: top;
    }
    .tree { 
        width: 80%;
        border-right: 1px solid #fff;
        overflow-y: auto;
    }
    .right-col {
        display: inline-block;
        width: 19%;
    }
    .adder {
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
    }
    .scrollable * {
        /* don't allow the children of the scrollable element to be selected as an anchor node */
        overflow-anchor: none;
    }

    #anchor {
        /* allow the final child to be selected as an anchor node */
        overflow-anchor: auto;

        /* anchor nodes are required to have non-zero area */
        height: 1px;
    }
</style>