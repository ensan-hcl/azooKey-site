<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useHead, useSeoMeta } from '@unhead/vue'

useHead({
  titleTemplate: '%s azooKey - 自由自在なキーボードアプリ'
})
useSeoMeta({
  ogSiteName: 'azooKey - 自由自在なキーボードアプリ',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '@azooKey_dev'
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
  word-break: auto-phrase;
}

footer {
  background-color: #d5bab8;
}
</style>
