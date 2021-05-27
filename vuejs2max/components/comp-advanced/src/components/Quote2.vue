<template>
    <div class="container">
        <div class="row">
            <slot></slot>
            <slot name="title"></slot>
            <p>
                <slot name="content"></slot>
            </p>
            <span style="color: lightgray"><slot name="subtitle">The Subtitle (default value)</slot></span>
        </div>
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
        padding: 10px;
        margin: 10px auto;
        text-align: center;
        background-color: cornsilk;
    }

</style>
