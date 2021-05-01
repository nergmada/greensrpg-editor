<script>
    export let edge = {};
</script>

<div class="row">
    <div class="cell">
        <p>Might:</p>
        <input bind:value={edge.might} type="number" />
    </div>
    <div class="cell">
        <p>Speed:</p>
        <input bind:value={edge.speed} type="number" />
    </div>
    <div class="cell">
        <p>Intellect:</p>
        <input bind:value={edge.intellect} type="number" />
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