import {createApp} from 'vue';
import {createStore} from 'vuex';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';
import Home from './components/Home.vue';
import Tasks from './components/Tasks.vue';

const store = createStore({
    state() {
        return {
            tasks: []
        };
    },
    mutations: {
        addTask(state, task) {
            state.tasks.unshift(task);
        }
    }
});

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
