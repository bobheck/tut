Vue.component('hello', {
  template: '<h1>Component Hello!</h1>'
});

var vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs.showButton1.innerText = "Changed Text");
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

//vm1.$refs.heading.innerText = "Gotcha";

setTimeout(function() {
  vm1.title = 'Changed by SetTimeout';
}, 6000);

var vm2 = new Vue({
    el: '#app2',
    data: {
      title: 'App2 Instance'
    },
    methods: {
      onChange: function() {
         vm1.title = 'Changed from vm2';
      }
    }
})


var vm3 = new Vue({
    template: '<h1>Hello</h1>'
});

vm3.$mount('#app3');
