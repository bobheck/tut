<template>
    <div>
        <button class="btn btn-success" @click="asyncIncrement({by:40, duration: 2000})">AsyncIncrement</button>
        <button class="btn btn-success" @click="asyncDecrement({by:40, duration: 1300})">AsyncDecrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>


// internally
// increment(by) {
    this.$store.dispatch('increment', by);
