
<template>
  <div class="column" id="app">
    <div>
      <img src="./assets/logo.png">
    </div>
    <router-link to="/hello" class="button"><a>Hello</a></router-link>
    <router-link to="/todo" class="button"><a>todo</a></router-link>
    <router-link to="/koa" class="button"><a>axios</a></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 默认加载
import TodoList from './components/TodoList.vue'
import HelloWorld from './components/HelloWorld'
import Koa from './components/Koa'

export default {
  components: {
    TodoList, HelloWorld, Koa
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.deleteLine {
     text-decoration:line-through;
  }
</style>
