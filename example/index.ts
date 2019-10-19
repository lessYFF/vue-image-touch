import Vue from 'vue';
import App from './app.vue';
import imageTouch from '../src/index';

Vue.use(imageTouch);
new Vue({
  el: '#app',
  render: h => h(App),
});
