<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Список задач</h1>
    <form @submit.prevent="addTask" :class="$style.form">
      <input type="text" v-model="newTask" placeholder="Новая задача" :class="$style.input"/>
      <button type="submit" :class="$style.button">Добавить</button>
    </form>
    <ul :class="$style.list">
      <li v-for="task in tasks" :key="task.id" :class="$style.item">
        <p v-if="!task.editing" :class="$style.text">{{ task.text }}</p>
        <input v-else v-model="task.editedText" @keyup.enter="saveTask(task)" :class="$style.editing"/>
        <button v-if="!task.editing" @click="editTask(task)" :class="$style.edit">Редактировать</button>
      </li>
    </ul>


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


    function editTask(task) {
      task.editing = true;
      task.editedText = task.text;
    }

    function saveTask(task) {
      if (task.editedText.trim() !== '') {
        task.text = task.editedText;
        task.editing = false;
      }
    }


    return {newTask, tasks, addTask, editTask, saveTask};
  },
};
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input {
  padding: 6px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 6px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.text {
  font-size: 18px;
  margin: 5px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
}

.editing {
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.edit {
  margin: 5px;
  padding: 4px 8px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 120px;
}

.edit {
  background-color: #ffc107;
}

.edit:hover {
  opacity: 0.8;
}

.link {
  color: #007bff;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 10px 0;
}

.link:hover {
  color: #0056b3;
}

</style>
