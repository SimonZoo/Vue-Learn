<template>
<div>
  <div class="button" style="margin-top: .5rem;"  @click="letter"> GET </div>
  <div> {{message.data}}</div>
</div>
</template>

<script>
import axios from '../http'

export default {
  methods: {
    letter: function () {
      axios.get('http://localhost:3001/', {})
        .then((response) => {
          console.log(response)
          // this.message = response.data
          this.message = response
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  data () {
    return {
      message: {}
    }
  }
}
</script>

<style>
</style>
