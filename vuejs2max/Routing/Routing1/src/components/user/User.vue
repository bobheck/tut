<template>
    <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr>
    <router-view></router-view>

    </div>
</template>

<script>

    export default{
        // https://router.vuejs.org/guide/essentials/passing-props.html
        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>