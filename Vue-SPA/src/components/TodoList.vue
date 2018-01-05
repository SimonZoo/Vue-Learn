<template>
  <div class="column is-offset-4 is-4">
    <label class="label"> Vue Todo</label>
     <todo-input 
      v-model="newTodoText"
      placeholder="Input New Todo"
      @keydown.enter="addNewTodo"
      />
      <ul v-if="todos.length">
        <p class="panel-tabs">
          <a v-for="bar in barList" 
            @click="choiceUrl(bar.title, bar.status)" 
            :key="bar.status"
            :class="[selectState, title === bar.title ? 'is-active' : '']">
            {{bar.title}}
          </a>
        </p>
        <ul v-if="selectedTodos.length">
          <todo-list-item
            v-for="todo in selectedTodos"
            :key="todo.id"
            :todo="todo"
            :completed="iscompleted"
            @remove="removeTodo"/>
        </ul>
        <p v-else>Nothing in this status</p>
      </ul>
    <p v-else>
      Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>

import TodoInput from './TodoInput.vue'
import TodoListItem from './TodoListItem.vue'

var STORAGE_KEY = 'todos-vue-key'
var todosStorage = {
  fetch: function () {
    var LocalTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    LocalTodos.forEach(function (todo, index) {
      todo.id = index
    })
    todosStorage.uid = LocalTodos.length
    return LocalTodos
  },
  save: function (LocalTodos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(LocalTodos))
  }
}

export default {
  components: {
    TodoInput, TodoListItem
  },
  data () {
    return {
      newTodoText: '',
      visibility: 'all',
      title: 'All',
      status: 0,
      barList: [
        {
          status: 0,
          title: 'All'
        },
        {
          status: 1,
          title: 'Active'
        },
        {
          status: 2,
          title: 'Completed'
        }],
      todos: todosStorage.fetch(),
      selectedTodos: []
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todosStorage.save(todos)
      },
      deep: true
    }
  },
  computed: {
    selectState: function () {
      if (this.status === 0) {
        this.selectedTodos = this.todos
      } else if (this.status === 1) {
        this.selectedTodos = this.todos.filter(todo => {
          if (!todo.completed) return todo
        })
      } else if (this.status === 2) {
        this.selectedTodos = this.todos.filter(todo => {
          if (todo.completed) return todo
        })
      }
    },
    iscompleted (completedId) {
      this.todos.filter(todo => {
        if (todo.id === completedId) {
          todo.completed = !todo.completed
        }
      })
    }
  },
  methods: {
    choiceUrl (title, status) {
      this.title = title
      this.status = status
    },
    addNewTodo () {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: todosStorage.uid++,
          text: trimmedText,
          completed: 0
        })
        this.newTodoText = ''
      }
    },
    removeTodo (removedId) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== removedId
      })
    }
  }
}
</script>
