import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/tasks', component: Tasks}
    ]
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
