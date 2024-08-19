<template>
  <header><slot></slot></header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #d5bab8;
  padding-bottom: 15px;
}
</style>
