<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote quote="A great Quote!"></app-quote>
                <app-quote2>
                    <H2>Quote 2</H2>
                    <p>A geater quote!</p>
                </app-quote2>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Quote2 from './components/Quote2.vue';
    export default {
        components: {
            appQuote: Quote,
            appQuote2: Quote2
        }
    }
</script>

<style>
</style>
