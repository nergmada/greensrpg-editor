<div id="outer">
    <div id="inner">
        <slot></slot>
    </div>
</div>

<style>
    #outer {
        display: table;
        height: 100%;
        width: 100%;
    }
    #inner {
        width: 100%;
        display: table-cell;
        vertical-align: middle;
    }
</style>