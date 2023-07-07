<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Главная страница</h1>
    <router-link to="/tasks" :class="$style.link">Перейти к списку задач</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style module>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.title {
  font-size: 32px;
  margin-bottom: 20px;
}

.link {
  color: #7895CB;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link:hover {
  color: #4A55A2;
}
</style>
