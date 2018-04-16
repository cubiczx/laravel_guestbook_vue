
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('signatures', require('./components/Signatures.vue'));
Vue.component('signature-form', require('./components/SignatureForm.vue'));
Vue.component('paginate', require('vuejs-paginate'));

const app = new Vue({
    el: '#app'
});