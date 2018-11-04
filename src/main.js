import Vue from "vue";
import App from "./App";
import store from "./store";

new Vue({
    store, // ES6 syntax (instead of store: store)
    render: h => h(App)
}).$mount("#app");