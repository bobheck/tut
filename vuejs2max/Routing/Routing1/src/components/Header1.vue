<template>
    <div class="container">
    <ul class="nav nav-pills">
        <!-- do not use href tags, use router-link to not post to server each click -->
        <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>
        <router-link class="nav-link" active-class="active" exact to="/user">User</router-link>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "Header1"
    }
</script>

<style scoped>

</style>