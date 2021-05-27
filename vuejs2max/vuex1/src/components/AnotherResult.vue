<template>
    <div>
    <p>Counter is: {{ dcnt }}</p>
    <p>Number of clicks: {{sc}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types.js';

    export default {
        computed: {
            ...mapGetters({
                dcnt: types.DOUBLE_COUNTER,
                sc: types.CLICK_COUNTER
            })
        }

        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }

    }

</script>
