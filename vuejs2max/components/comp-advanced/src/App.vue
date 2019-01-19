<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appDefault'">Default</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <app-quote quote="A great Quote!"></app-quote>

                <app-quote2>
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p slot="content">A geater quote!</p>
                    <p>This goes to default (unnamed) slot</p>
                </app-quote2>

                <hr>
                <h2>Dynamic Components</h2>
                <keep-alive>
                    <component :is="selectedComponent">Default Dynamic</component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Default from './components/Quote2.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'Quote 2',
                selectedComponent: 'appDefault'
            }
        },
        components: {
            appQuote: Quote,
            appQuote2: Default,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
    h2 {
        color: seagreen;
    }
</style>
