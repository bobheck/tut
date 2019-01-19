<template>
    <div class="row">
        <appQuote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</appQuote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        name: "QuoteGrid",
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDelete', index);
            }
        }

    }
</script>

<style scoped>

</style>
