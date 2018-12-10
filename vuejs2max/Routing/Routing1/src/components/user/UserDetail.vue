<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{id}} {{this.rt}}</p>
        <router-link tag="button" :to="`${this.rt}`" class="btn btn-success">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                rt: `/user/${this.id}/edit`
            }
        }
    }

</script>