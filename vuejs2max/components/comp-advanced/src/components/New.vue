<template>
    <div class="container">
        <div class="row">
            <h3>New Quote</h3>
            <button @click="counter++">Count+</button>
            <p>{{ counter }}</p>
        </div>
    </div>
</template>


<script>
    export default {
        name: "New",
        data: function() {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log('New destroyed');
        },
        activated() {
            console.log('New activated');
        },
        deactivated() {
            console.log('New deactivated');
        },
        created() {
            console.log('New created');
        }

    }
</script>

<style scoped>

</style>
