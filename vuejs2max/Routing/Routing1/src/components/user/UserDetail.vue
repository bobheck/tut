<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{userId}}</p>
        <router-link
                tag="button"
                :to="{name: 'userEdit', props: true}"
                class="btn btn-success">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        props: ['userId']
    }

</script>