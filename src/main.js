require("./components/icons/icons");
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import mixin from "./components/js/main";

Vue.component("dui-icon", FontAwesomeIcon);
Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
