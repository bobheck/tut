<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-In Directives</h1>
                <p v-text="'Some text to display'"></p>
                <p v-html="'Some <strong>html</strong> to display'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Global Directives</h1>
                <p v-ghighlight:bg.delayed ="'gold'"><strong>Color This</strong></p>
                <p v-ghighlight ="'blue'"><strong>Color This Too</strong></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Local Directives</h1>
                <p v-lhighight:bg.delayed.blink ="{mainColor: 'gold', secondColor:'lightblue', interval: 2000}"><strong>Color This</strong></p>
                <p v-lhighight="{mainColor: 'blue'}"><strong>Color This Too</strong></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Challenge</h1>
                <button v-custOn:click="clicked" class="btn btn-primary">Click Me</button>
                <hr>
                <div
                        style="width: 100px; height: 100px; background-color: lightgreen;"
                        v-cust-on:mouseenter="me" v-cust-on:mouseleave="ml">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        directives: {
            'lhighight': {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3500;
                    }

                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'bg') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            } ,binding.value.interval);
                        }, delay);
                    }
                    else {
                        setTimeout(() => {
                            if (binding.arg == 'bg') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            },
            'custOn': {
                bind(el, binding) {
                    // el.onclick = function() {
                    //     binding.value();
                    // }
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn)
                }
            }
        },
        methods: {
            clicked() {
                alert('Button was clicked');
            },
            me() {
                console.log("mouse entered");
            },
            ml() {
                console.log("mouse left");
            }

        }
    }
</script>

<style>

</style>
