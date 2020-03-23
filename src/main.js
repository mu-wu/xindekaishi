// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import {
//     Container
// } from 'element-ui';

// Vue.use(Container);


//   Vue.prototype.$loading = Loading.service;
//   Vue.prototype.$msgbox = MessageBox;
//   Vue.prototype.$alert = MessageBox.alert;
//   Vue.prototype.$confirm = MessageBox.confirm;
//   Vue.prototype.$prompt = MessageBox.prompt;
//   Vue.prototype.$notify = Notification;
//   Vue.prototype.$message = Message;

Vue.use(ElementUI);
Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})