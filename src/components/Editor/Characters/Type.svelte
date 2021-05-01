<script>
    export let type = "Adept";
</script>

<p>Adept:</p>
<input type="radio" bind:group={type} value="Adept">
<p>Explorer:</p>
<input type="radio" bind:group={type} value="Explorer">
<p>Speaker:</p>
<input type="radio" bind:group={type} value="Speaker">
<p>Warrior:</p>
<input type="radio" bind:group={type} value="Warrior">

<style>
    p {
        display: inline-block;
    }
</style>