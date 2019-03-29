import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  //Fetch all todos from the api
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    //Set all return todos in the response data to appear in front view
    commit('setTodos', response.data);
  },
  //Add new todo
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );
    //Set all return todos in the response data to appear in front view
    commit('newTodo', response.data);
  },
  //Remove todo
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    //Removed todo from id
    commit('removeTodo', id);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );
    commit('updateTodo', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
