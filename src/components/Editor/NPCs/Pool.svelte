<script>
    export let name = null;
    export let max = 0;
    export let current = 0;
</script>

<div class="row">
    <div class="cell">
        <p><b>{name}:</b></p>
    </div>
    <div class="cell">
        <p>Max:</p>
        <input bind:value={max} type="number" />
    </div>
    <div class="cell">
        <p>Current:</p>
        <input bind:value={current} type="number" />
    </div>
</div>

<style>
    p {
        display: inline-block;
    }
    .cell {
        display: table-cell;
        padding-right: 10px;
    }
    .row {
        display: table-row;
    }
    input {
        width: 3rem;
    }
</style>