<template>
    <div>
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ServerList"
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
