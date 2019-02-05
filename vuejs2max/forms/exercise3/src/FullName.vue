<template>
    <div>
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
                    type="text"
                    id="fullName"
                    class="form-control"
                    v-model="userData.fullName">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FullName"
    }
</script>

<style scoped>

</style>