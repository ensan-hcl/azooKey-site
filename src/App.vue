<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { router } from './router'

const route = useRoute()
const url = router.resolve(route.fullPath).href

export default defineComponent({
  name: 'App',

  onMounted(() => {
  metaInfo: {
    titleTemplate: '%s | azooKey - 自由自在なキーボードアプリ',
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: url },
      {
        property: 'og:site_name',
        content: 'azooKey - 自由自在なキーボードアプリ'
      },
      { name: 'twitter:url', content: url },
      { name: 'twitter:creator', content: '@azooKey_dev' }
    ]
  }
}
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #382d0b;
}
body {
  /*chrome系ブラウザは8pxのmarginを強制的に指定する*/
  margin: 0px;
}

footer {
  background-color: #d5bab8;
}
</style>
