<template>
  <div>
    <PageHeader>
      <ArticleHeader1
        >「内部データの更新のため本体アプリを開く必要があります。よろしいですか？」というアラートについて</ArticleHeader1
      >
    </PageHeader>

    <img src="../../../assets/message_ver_1_5.jpg" class="screenshot" />

    <PageArticle>
      <p>
        azooKeyをバージョン1.5に更新した直後に「内部データの更新のため本体アプリを開く必要があります。よろしいですか？」というアラートが現れることがあります。
      </p>
      <p>
        バージョン1.5ではパフォーマンスの向上のためにデータ形式を一部変更しました。このアラートは、それに伴う収容アプリ側でのユーザ辞書データの更新のためにアプリの起動を求めるものです。
      </p>
      <p>
        「更新」を押すと収容アプリが開き、データが更新されます。更新が完了すると「完了しました」と表示されます。
      </p>
      <p>
        ※ユーザ辞書機能を利用したことがなくてもこのアラートは表示されることがあります。
      </p>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '../../TheFooter.vue'
import PageHeader from '../../PageHeader.vue'
import PageArticle from '../../PageArticle.vue'
import ArticleHeader1 from '../../ArticleHeader1.vue'

const description =
  'バージョン1.5へのアップデート後に表示されるアラートについて説明します。'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title =
  '[ver1.5] アラートについて | azooKey - 自由自在なキーボードアプリ'

export default {
  name: 'Ver1_5_message',
  metaInfo: {
    title: '[ver1.5] アラートについて',
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
    PageHeader,
    PageArticle,
    ArticleHeader1
  },
  data () {
    return {}
  },
  mounted: function () {
    window.scrollTo(0, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screenshot {
  width: min(500px, 100%);
}
h2,
h3 {
  padding: 10px;
  font-weight: bold;
}
a {
  color: #42b983;
}
</style>
