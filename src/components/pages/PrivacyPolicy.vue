<template>
  <div>
    <PageHeader>
      <ArticleHeader1
        ><span class="text">プライバシー</span><span class="text">ポリシー</span></ArticleHeader1
      >
    </PageHeader>
    <PageArticle>
      <h2>1.個人情報の定義</h2>
      <p>
        本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報を意味します。また入力履歴とは利用者がazooKeyを利用する上でキーボードを介して行う入力操作の履歴を指します。
      </p>

      <h2>2.個人情報の利用</h2>
      <h3>2.1.入力履歴</h3>
      <p>
        利用者の入力履歴は利用者の端末内のみで利用されます。azooKeyは利用者の端末外にこれらの情報を一切送信しません。
      </p>
      <h3>2.2.その他の情報</h3>
      <p>
        アプリの利便性向上のため、クラッシュ時の状況や設定に関するデータを取得することがあります。この情報は不具合の修正のためにのみ用いられます。
      </p>
      <p>
        デバイス、iOS及びアプリの各バージョンの使用率、設定・機能の使用率などを匿名で取得することがあります。この情報は機能の改善のためにのみ用いられます。
      </p>
      <h2>3.改訂</h2>
      <p>
        本プライバシーポリシーを改訂した場合、利用者には改訂した旨を周知します。改定後も継続してazooKeyを利用する場合、これを以て改訂を受け入れたものとします。
      </p>
      <h2>4.連絡手段</h2>
      <p>
        ※ご不明な点があれば、<a href="./Contact">お問い合わせ</a>よりお気軽にお問い合わせください。
      </p>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheFooter from '../TheFooter.vue'
import ArticleHeader1 from '../ArticleHeader1.vue'
import PageHeader from '../PageHeader.vue'
import PageArticle from '../PageArticle.vue'

const description = 'プライバシーポリシー'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title = 'プライバシーポリシー | azooKey - 自由自在なキーボードアプリ'

export default defineComponent({
  name: 'PrivacyPolicy',

  metaInfo: {
    title: 'プライバシーポリシー',
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
    PageHeader,
    PageArticle
  },

  mounted: () => {
    window.scrollTo(0, 0)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,
h3 {
  margin-top: 0px;
  padding: 10px;
  font-weight: bold;
}
.text {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
