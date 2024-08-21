<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

import '@fontsource-variable/noto-sans-jp/wght.css'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (typeof window !== 'undefined') {
    const url = router.resolve(route.fullPath).href

    useHead({
      titleTemplate: '%s | azooKey - 自由自在なキーボードアプリ'
    })
    useSeoMeta({
      ogSiteName: 'azooKey - 自由自在なキーボードアプリ',
      ogType: 'website',
      ogUrl: url,
      twitterCard: 'summary_large_image',
      twitterCreator: '@azooKey_dev'
    })
  }
})
</script>

<style>
#app {
  font-family: 'Noto Sans JP Variable';
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
