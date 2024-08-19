<template>
  <h1><slot></slot></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleHeader1'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2rem;
  margin-top: 0px;
  padding: 15px;
  font-weight: bold;
}
</style>
