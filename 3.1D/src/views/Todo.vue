<style>
.contain {
    text-align: center; /* Center text horizontally */
    margin: 0 auto; /* Center the container horizontally */
    max-width: 400px; /* Limit container width for better readability */
    padding: 1rem; /* Add some padding for spacing */
  }
</style>
<template>
    <div class="contain">
      <h1>Todo App</h1>
      <div>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
      </div>
      
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.completed">
          <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
          <button @click="deleteTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const newTodo = ref('');
      const todos = ref([]);
  
      const addTodo = () => {
        if (newTodo.value.trim() === '') return;
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';
      };
  
      const deleteTodo = index => {
        todos.value.splice(index, 1);
      };
  
      return { newTodo, todos, addTodo, deleteTodo };
    }
  };
  </script>
  