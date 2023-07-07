<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Список задач</h1>
    <form @submit.prevent="addTask" :class="$style.form">
      <input type="text" v-model="newTask" placeholder="Новая задача" :class="$style.input"/>
      <button type="submit" :class="$style.button">Добавить</button>
    </form>


    <router-link to="/" :class="$style.link">Назад на главную страницу</router-link>
  </div>
</template>

<script>
import {computed, ref, watch} from 'vue';
import {useStore} from 'vuex';

export default {
  name: 'Tasks',
  setup() {
    const store = useStore();
    const newTask = ref('');
    const tasks = computed(() => store.state.tasks);

    function addTask() {
      if (newTask.value) {
        store.commit('addTask', {id: Date.now(), text: newTask.value});
        newTask.value = '';
      }
    }


    return {newTask, tasks, addTask};
  },
};
</script>

<style module>

</style>
