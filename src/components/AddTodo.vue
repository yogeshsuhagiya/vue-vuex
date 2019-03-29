<template>
  <div>
    <h3>Add New Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <textarea v-model="title">
        </textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: block;
  width:100%;
}

textarea {
  padding: 10px;
  border: 1px solid #41a940;
  outline: 0;
  display: block;
  width:100%;
}

input[type="submit"] {
  background: #41a940;
  color: #fff;
  border: 1px #41a940 solid;
  cursor: pointer;
  display: block;
  padding: 10px 20px;
  min-width: 150px;
  border-radius: 3px;
  margin-top: 20px;
}
</style>
