<template>
    <div>
    <p>Counter is: {{ dcnt }}</p>
    <p>Number of clicks: {{sc}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                dcnt: 'doubleCounter',
                sc: ['stringCounter']
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
