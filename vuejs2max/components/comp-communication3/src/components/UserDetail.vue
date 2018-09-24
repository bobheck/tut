<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    export default {
        //props: ['username'],    without validation
        props: {
            //username: {
            //  [String, Array]   // setting the valid types for the username prop
            // },
            username: {
                type: String,   // if type is an Object or Array, then the any default should be a function
                // required: true  // this component can be used only if it passes the username prop
                default: 'Bob'  // use either required or default, not both
               },
               resetFn: Function
            },

            methods: {
                switchName() {
                    return this.username.split("").reverse().join("");
                },
                resetName() {
                    this.username = 'Bob';
                    this.$emit('nameWasReset', this.username);
                }
            }
        }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
