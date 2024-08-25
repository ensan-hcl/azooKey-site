<template>
  <article><slot></slot></article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  font-weight: none;
  text-align: left;
  background-color: white;
  padding-left: max(12px, 10vw);
  padding-right: max(12px, 10vw);
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
