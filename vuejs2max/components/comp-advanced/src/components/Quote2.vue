<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote2"
    }
</script>

<style scoped>
    div {
        border: 1px solid lightgray;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
        background-color: mintcream;
    }

</style>