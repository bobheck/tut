import Vue from 'vue'
import App from './App.vue'

Vue.directive('ghighlight' , {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3500;
    }

    setTimeout(() => {
      if (binding.arg == 'bg') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});



new Vue({
  el: '#app',
  render: h => h(App)
})
