// Import vue and vue-router
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue';

// Import application pages
import Home from './views/home.vue'
import AccidentMap from './views/accident-map.vue'
import TravelOptions from './views/travel-options.vue'
import Settings from './views/settings.vue'
import Account from './views/account.vue'

const app = createApp(App);
const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/map', component: AccidentMap },
        { path: '/travel-options', component: TravelOptions },
        { path: '/settings', component: Settings },
        { path: '/account', component: Account }
    ]
});

app.use(router).mount('#app');
