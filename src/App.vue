<template>
  <div id="app">
    <div class="container">
      <Header />
      <AddTodo/>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  }
};
</script>

<style>
body {
  font-family: "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #FFF;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
