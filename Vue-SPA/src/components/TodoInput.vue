<template>
  <div>
    <input 
    type="text" 
    class="input" 
    :value="value"
    v-on="listeners">  
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners, // ?
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style>

</style>
