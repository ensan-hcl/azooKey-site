<template>
  <div>
    <PageHeader>
      <ArticleHeader1>利用規約</ArticleHeader1>
    </PageHeader>
    <PageArticle>
      <h2>1.本規約について</h2>
      <h3>1.1.適用</h3>
      <p>
        azooKey（以下「本アプリ」といいます。）の利用規約（以下「本規約」といいます。）は、開発者が本アプリ上で提供するサービス（以下「本サービス」といいます。）を利用者が利用する際の一切の行為に適用されます。利用者は、本規約に従い本サービスを利用するものとします。
      </p>
      <h3>1.2.同意</h3>
      <p>
        利用者は自己の責任及び費用において本アプリをダウンロード、インストールし、本サービスを利用することができます。利用者が本サービスの利用を開始した場合本規約の全ての記載内容について同意したものとみなします。
      </p>
      <h3>1.3.変更</h3>
      <p>
        開発者は本規約をいつでも任意の理由で変更することができるものとし、事前の変更内容の周知に努めるものとします。利用者が本規約の変更の効力が生じた後に本サービスを利用する場合は変更及び変更後の本規約に同意したものとみなすこととし、変更に同意できない場合利用者が自ら本サービスの利用を停止するものとします。
      </p>
      <h2>2.権利・罰則・免責等</h2>
      <h3>2.1.著作権</h3>
      <p>本アプリの著作権及びその他の権利は、明示的に定めがある場合を除き、開発者に帰属します。</p>
      <h3>2.2.違反への罰則</h3>
      <p>
        利用者が本規約に違反した場合開発者はいつでも利用者の本サービスの利用を終了させることができます。この際、開発者は利用者に対して一切責任を負いません。
      </p>
      <h3>2.3.免責</h3>
      <ul>
        <li>
          開発者は、本サービスの利用により利用者に発生した損害について、一切責任を負いません。
        </li>
        <li>開発者は提供するコンテンツの完全性、確実性等について一切責任を負いません。</li>
        <li>
          利用者が本サービスを利用することにより第三者に対し損害を与えた場合利用者が自己の責任及び費用においてこれを賠償するものとします。
        </li>
        <li>
          開発者は利用者が本サービスが利用できないことによって引き起こされた損害について一切責任を負いません。
        </li>
      </ul>
      <h2>3.管轄</h2>
      <p>
        本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
      </p>

      <h2>4.連絡手段</h2>
      <p>
        ご不明な点があれば、<a href="./Contact">お問い合わせ</a>よりお気軽にお問い合わせください。
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

const description = '利用規約'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title = '利用規約 | azooKey - 自由自在なキーボードアプリ'

export default defineComponent({
  name: 'TermsOfService',

  metaInfo: {
    title: '利用規約',
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
ul {
  padding-left: 10px;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
