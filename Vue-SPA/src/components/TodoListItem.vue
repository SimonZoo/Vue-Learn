<template>
  <li class="panel-block todoItem" >
      <input type="checkbox"  
      @click="$emit('completed', todo.id)"
      v-model="todo.completed" >
    <div v-bind:class="{ deleteLine: todo.completed }" >{{ todo.text }}</div>
    <button @click="$emit('remove', todo.id)" class="deleteTodo is-right"><div >X</div></button>
  </li>	
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<<style>
  .deleteLine {
     text-decoration:line-through;
     color: gray;
     transition: all .3s ease;
  }
  
  .deleteTodo {
    border: none;
    font-size: 1.5rem;
    font-weight: 100;
    color: white;
    float: left;
  }

  .todoItem:hover > button {
    color: #333;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
  }
</style>
