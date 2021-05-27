<template>
              <div>
                <h1>Filters & Mixins</h1>
                    {{text | toUppercase | toLowercase}}
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from "./fruitMixin";

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                   return element.match(this.filterText);
                });
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
