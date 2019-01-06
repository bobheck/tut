<template>
    <div>
    <h1>The User Page</h1>
     <hr>
     <router-link tag="button" :to="{name: 'home'}" class="btn btn-primary">Go to Home</router-link>
     <router-view></router-view>
    </div>
</template>

<script>

</script>
