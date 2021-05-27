new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            btnClick: function() {
                alert("Clicked !");
            },
            storeDwnValue: function(event) {
                this.value = event.target.value;
            }
        }
    });