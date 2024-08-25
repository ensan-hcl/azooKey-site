<template>
  <router-link to="/">
    <img src="/static/assets/azooKeyLogo.png" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppIcon'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 64.4px;
  width: 21.8%;
  border-radius: 12%;
}
</style>
