<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <server-header></server-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
               <server-footer></server-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerHeader from "./ServerHeader.vue";
    import ServerDetails from "./ServerDetails.vue";
    import ServerFooter from "./ServerFooter.vue";
    import ServerList from "./ServerList.vue";
    export default {
        components: {ServerList, ServerFooter, ServerDetails, ServerHeader}
    }
</script>

<style>

</style>
