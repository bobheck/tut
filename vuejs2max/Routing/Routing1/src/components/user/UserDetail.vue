<template>
    <div>
    <h3>Some User Details</h3>
        <p>User loadedx: {{userid}} </p>
        <p>rt: {{rt()}}</p>
        <router-link
                tag="button"
                :to="`${rt()}`"
                class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        props: ['userid'],
        methods: {
            rt() {
                return `/user/${this.userid}/edit`;
            }
        }
    }
</script>

