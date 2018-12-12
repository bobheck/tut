c<template>
    <div>
        <h3>Edit the User</h3>
        <p>Selected ID: {{userId}}</p>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Analytics: {{$route.query.q}}</p>
    </div>
</template>

<script>
    export default {
        props: ['userId']
    }

</script>