import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import HelloWorld from '@/components/HelloWorld'
import Koa from '@/components/Koa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/koa',
      name: 'koa-test',
      component: Koa
    }
  ]
})
