import Vue from 'vue'
import App from './App.vue'
import '@/a.css'
import '@/c.scss'

new Vue({
    el: '#app',
    render: (h) => h(App),
}).$mount()