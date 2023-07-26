import { createApp } from 'vue'
import App from './App.vue'

import ChartPie from './components/ChartPie.vue';
import HelloWorld from './components/HelloWorld.vue';


createApp(App).use(ChartPie).use(HelloWorld).mount('#app')