<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  metaInfo: {
    titleTemplate: '%s | azooKey - 自由自在なキーボードアプリ',
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: location.href },
      {
        property: 'og:site_name',
        content: 'azooKey - 自由自在なキーボードアプリ'
      },
      { name: 'twitter:url', content: location.href },
      { name: 'twitter:creator', content: '@azooKey_dev' }
    ]
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
