<template>
  <div>
    <PageHeader>
      <ArticleHeader1>
        <span class="text">azooKey macOS版</span>
      </ArticleHeader1>
      <!-- Place this tag where you want the button to render. -->
      <p>
       <GitHubButton
          href="https://github.com/ensan-hcl/azooKey-Desktop/releases"
          data-icon="octicon-github"
          data-size="large"
          aria-label="Check releases of ensan-hcl/azooKey-Desktop on GitHub">
        Check Latest Releases
      </GitHubButton>
      <div align="center">
        <img src="/static/assets/azooKey_macOS_overview.png" alt="azooKey on macOS" class="main-image" />
       </div>
          
    </p>
    </PageHeader>

    <!-- Article Section with Introductions -->
    <PageArticle>

      <h3>ニューラルかな漢字変換エンジン「Zenzai」搭載</h3>
        <p>azooKey on macOSではGPT-2をベースにしたニューラル言語モデル「zenz」を用い、高精度なかな漢字変換エンジン「Zenzai」を実現しました。</p>
        <p>Zenzaiの詳細については、開発に関するブログ記事をご覧ください。</p>
        <p>🔗<a href="https://zenn.dev/azookey/articles/ea15bacf81521e">ニューラルかな漢字変換エンジン「Zenzai」をazooKey on macOSに搭載します</a></p>
        <h3>外部処理に頼らない高精度変換</h3>
        <p>変換処理は全てローカル完結。入力は全て端末内で処理されます。ニューラルかな漢字変換はオンデバイスのモデルを用いています。</p>
        <h3>オープンソースの日本語入力システム</h3>
        <GitHubButton
          href="https://github.com/ensan-hcl/azooKey-Desktop"
          data-icon="octicon-star"
          aria-label="Star ensan-hcl/azooKey-Desktop on GitHub">
        Star
      </GitHubButton>
        <p>azooKey on macOSは全ての実装がオープンソースです。必要に応じて自分でビルドしたり、改造して使ったりすることも可能です。</p>
    </PageArticle>

    <!-- Footer Component -->
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../components/TheFooter.vue'
import AppStoreLink from '../components/AppStoreLink.vue'
import ArticleHeader1 from '../components/ArticleHeader1.vue'
import PageHeader from '../components/PageHeader.vue'
import PageArticle from '../components/PageArticle.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import GitHubButton from 'vue-github-button'

const title = 'azooKey on macOS'
const description =
  'iOS向けキーボードアプリ「azooKey」のmacOS版は、ニューラルかな漢字変換エンジンを搭載した本格派日本語入力です。'
const image = 'https://azookey.netlify.app/static/og-image.png'

useHead({
  title: 'macOS版 | azooKey',
  titleTemplate: ''
})

useSeoMeta({
  ogTitle: () => title,
  twitterTitle: () => title,

  description: () => description,
  ogDescription: () => description,
  twitterDescription: () => description,

  ogImage: () => image,
  twitterImage: () => image
})

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Main',

  components: {
    TheFooter,
    AppStoreLink,
    PageHeader,
    PageArticle,
    ArticleHeader1,
    GitHubButton
  },

  data() {
    return {}
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-image {
  z-index: 1;
  width: min(100%, 500px);
  border-radius: 0.1rem;
}
h1 {
  margin: 8px;
  font-weight: bold;
  font-size: 3rem;
}
.text {
  display: inline-block;
}
ul {
  text-align: left;
  padding: 10px;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
header {
  background-color: #ddccdd;
  padding-bottom: 15px;
}
footer {
  background-color: #ddccdd;
  padding-bottom: 15px;
}
</style>
