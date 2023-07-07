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
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        updateTask(state, updatedTask) {
            const taskIndex = state.tasks.findIndex(task => task.id === updatedTask.id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = updatedTask;
            }
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
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
