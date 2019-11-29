// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
// DRAG, DROP
import { Drag, Drop } from 'vue-drag-drop'
// SWEETALERT
import VueSweetalert2 from 'vue-sweetalert2'

// BOOTSTRAP
Vue.use(BootstrapVue)
// DRAG, DROP
Vue.component('drag', Drag)
Vue.component('drop', Drop)
// SWEETALERT
Vue.use(VueSweetalert2)

// ESTILOS CSS
import('./assets/css/main.css')
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faDownload, faCheckCircle, faMarker, faMousePointer, faEraser, faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome, faDownload, faCheckCircle, faMarker, faMousePointer, faEraser, faPalette);
Vue.component('font-awesome-icon', FontAwesomeIcon)

// jQuery
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
