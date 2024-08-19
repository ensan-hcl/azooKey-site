<template>
  <div>
    <PageHeader>
      <ArticleHeader1>お問い合わせ</ArticleHeader1>
    </PageHeader>
    <PageArticle>
      <p>以下よりお問い合わせの種類を選び、フォームへのご記入をお願いいたします。</p>
      <p>「質問・連絡・その他」をお選びいただく場合、返信可能なメールアドレスをご用意ください。</p>
      <div v-for="link in links" :key="link.title">
        <h2>{{ link.title }}</h2>
        <p>
          <a v-bind:href="link.url">{{ link.title }}</a>
        </p>
        <p>{{ link.description }}</p>
      </div>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../TheFooter.vue'
import ArticleHeader1 from '../ArticleHeader1.vue'
import ArticleHeaderLogo from '../ArticleHeaderLogo.vue'
import PageHeader from '../PageHeader.vue'
import PageArticle from '../PageArticle.vue'

const description = 'azooKeyに関するお問い合わせをお寄せください。'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title = 'お問い合わせ | azooKey - 自由自在なキーボードアプリ'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',

  metaInfo: {
    title: 'お問い合わせ',
    meta: [
      { name: 'description', content: description },
      { name: 'twitter:description', content: description },
      { property: 'og:description', content: description },

      { name: 'twitter:image', content: image },
      { property: 'og:image', content: image },

      { name: 'twitter:title', content: title },
      { property: 'og:title', content: title }
    ]
  },

  components: {
    TheFooter,
    ArticleHeader1,
    // eslint-disable-next-line vue/no-unused-components
    ArticleHeaderLogo,
    PageHeader,
    PageArticle
  },

  data() {
    return {
      links: [
        {
          title: '不具合報告',
          description: 'バグや不安定な動作についてはこちらにお寄せください。',
          url: 'https://forms.gle/kkpBLbBySwGNDLzH9'
        },
        {
          title: '機能の改善・追加',
          description:
            'azooKeyの機能についてのご要望、改善案などについてはこちらにお寄せください。',
          url: 'https://forms.gle/4PrdgaC2mZEaYed76'
        },
        {
          title: '変換候補の追加',
          description: 'azooKeyの辞書への変換候補の追加についてはこちらにお寄せください。',
          url: 'https://forms.gle/EG4sxm2t6RxRTyqV6'
        },
        {
          title: '質問・連絡・その他',
          description:
            'azooKeyに関する質問、取材の申し込み等のご連絡についてはこちらにお寄せください。返信可能なメールアドレスを入力いただければ返信いたします。',
          url: 'https://forms.gle/cj9sBac4XVaJDtzR9'
        }
      ]
    }
  },

  mounted: () => {
    window.scrollTo(0, 0)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 1.5rem;
  margin-top: 0px;
  margin-left: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
}
a {
  color: #635959;
}
</style>
