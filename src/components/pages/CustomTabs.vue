<template>
  <div>
    <PageHeader>
      <img src="../../assets/customtabs_header0.png" class="header_img" />
      <h1><span class="text">カスタム</span><span class="text">タブ</span></h1>
    </PageHeader>

    <PageArticle>
      <h2>カスタムタブ機能について</h2>
      <div v-for="item in introductions" :key="item.header">
        <h3>{{ item.header }}</h3>
        <p v-html="item.contents"></p>
      </div>
      <h2>カスタムタブの作例</h2>
      <p>
        カスタムタブはとても自由度の高い機能です。そこでいくつか作例を紹介します。
      </p>
      <p>
        カスタムタブファイルのURLを読み込むことで、ほかの人が作ったカスタムタブを使うこともできます。azooKeyが用意したいくつかのリンクを共有します。
      </p>
      <p>
        このカスタムタブファイルを使うには、azooKeyを開き、「拡張」タブ→カスタムタブの管理→URLから読み込む→保存、の順で操作してください。
      </p>
      <div v-for="item in customtabfiles" :key="item.link">
        <h3>{{ item.title }}</h3>
        <p v-html="item.description"></p>
        <p>
          <button type="button" v-clipboard:copy="item.link" v-clipboard:success="onCopy" v-clipboard:error="onError">
            リンクをコピーする
          </button>
          <span v-if="copy_succeed.target == item.link && copy_succeed.bool">
            ✔️
          </span>
          <input type="text" v-bind:value="item.link" readonly />
        </p>
        <img v-bind:src="item.image" class="screenshot_img" />
      </div>
      <div v-for="authorItem in user_made_customtabfiles" :key="authorItem.author">
        <h3 v-html="authorItem.author + 'さまのカスタムタブ'"></h3>
        <p v-html="'連絡先: ' + authorItem.author_contacts"></p>
        <p v-html="authorItem.description"></p>
        <blockquote>
          <p v-html="authorItem.author_description"></p>
        </blockquote>
        <div v-for="image in authorItem.images" :key="image">
          <img v-bind:src="image" class="screenshot_img" />
        </div>
        <div v-for="item in authorItem.files" :key="item.link">
          <h4>{{ item.title }}</h4>
          <p>
            <button type="button" v-clipboard:copy="item.link" v-clipboard:success="onCopy" v-clipboard:error="onError">
              リンクをコピーする
            </button>
            <span v-if="copy_succeed.target == item.link && copy_succeed.bool">
              ✔️
            </span>
            <input type="text" v-bind:value="item.link" readonly />
          </p>
        </div>
      </div>
    </PageArticle>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '../TheFooter.vue'
import AppStoreLink from '../AppStoreLink.vue'
import PageHeader from '../PageHeader.vue'
import PageArticle from '../PageArticle.vue'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

const description = 'カスタムタブはさまざまなレイアウト・配列を自由に実現することのできる機能です。azooKeyで使えるカスタムタブファイルを配布します。'
const image = 'https://azookey.netlify.app/static/og-image.png'
const title = 'カスタムタブ | azooKey - 自由自在なキーボードアプリ'

export default {
  name: 'CustomTabs',
  components: {
    TheFooter,
    AppStoreLink,
    PageHeader,
    PageArticle
  },
  metaInfo: {
    title: 'カスタムタブ',
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
  mounted: function () {
    window.scrollTo(0, 0)
  },
  data: function () {
    return {
      copy_succeed: {
        target: '',
        bool: false
      },
      introductions: [
        {
          header: 'できること',
          contents:
            'カスタムタブ機能はazooKeyにオリジナルのタブを追加することを可能にする新しい機能です。定型文を入力するキーボードを作ったり、入力しづらい記号を集めたキーボードを作ったりすることができます。'
        },
        {
          header: '作り方',
          contents: `azooKeyアプリ内ではフリック式・スクロール式のカスタムタブを作ることができます。さらに高度なカスタムタブを作るには<a href="https://github.com/ensan-hcl/CustardKit">CustardKit</a>が便利です。`
        }
      ],
      customtabfiles: [
        {
          title: 'GODAN',
          description:
            'GODAN配列がazooKeyでも使えるようになるテンキースタイルのカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/godan.json',
          image: require('../../assets/custard_godan.jpg')
        },
        {
          title: 'ヒエログリフ',
          description:
            'ヒエログリフを簡単に入力できるスクロール式のカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/hieroglyphs.json',
          image: require('../../assets/custard_hieroglyphs.jpg')
        },
        {
          title: '楔形文字',
          description:
            '楔形文字を簡単に入力できるスクロール式のカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/cuneiforms.json',
          image: require('../../assets/custard_cuneiforms.jpg')
        },
        {
          title: '装飾数字',
          description:
            '装飾数字を簡単に入力できるPCスタイルのカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/number_font.json',
          image: require('../../assets/custard_number_font.jpg')
        },
        {
          title: 'ギリシャ語フリック',
          description:
            'ギリシャ語をフリックで入力できるテンキースタイルのカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/flick_greek.json',
          image: require('../../assets/custard_flick_greek.jpg')
        },
        {
          title: 'しっぽり明朝濁点',
          description:
            'しっぽり明朝の濁点付き仮名をフリックで入力できるテンキースタイルのカスタムタブです。',
          link:
            'https://azookey.netlify.app/static/custard/sippori_dakuten.json',
          image: require('../../assets/custard_sippori_dakuten.jpg')
        }
      ],
      user_made_customtabfiles: [
        {
          author: '森プロジェクト',
          images: [require('../../assets/mori_project_custard_iPad_fifty.jpg'), require('../../assets/mori_project_custard_iPhone_fifty.jpg')],
          description: '森プロジェクトさまから工夫を凝らした五十音のキーボードのカスタムタブファイルをご提供いただきました。iPad版は3ファイル、iPhone版は4ファイルあります。',
          author_description: `あったらいいなと思う機能を追加した五十音キーボードです。画面端にあるキー（ア行とワ行）を横にフリックするとカーソル移動ができます。<br>
文字キーをどれでも下フリックすると確定できます。濁音は文字キーの左右両側のフリックおよび長押しに、半濁音・拗音・促音は上フリックに割り当てました。似た記号はフリックや長押しにまとめることでキーの数を減らしてすっきりさせました。<br>
中央最下段のキーを下フリックするとキーボードをしまえます。英数モードの状態で英数切り替えボタンをもう一度タップすると大文字入力モード（caps lockと同じ）になります。iPad版の中央最上段にはフリックでカーソルを動かすキーを配置しました。<br>
括弧や句読点を入力すると自動的に確定しますが、iPhone版五十音キーボードでは長押しすることで、違う種類の括弧や句読点を変換候補から選べます。<br><br>
iPhone版も両手持ちでのタイピングを想定して作りました。五十音順が好きな方は是非使ってみてください！なお、ご使用は自己責任で行ってください。JSONファイルはテキストデータですので、テキストエディタやパソコンのウェブブラウザ等で中身をご確認いただけます。`,
          author_contacts: "<a href='https://twitter.com/mori_project'>𝕏（Twitter）</a>",
          files: [
            {
              title: 'iPad用かな五十音順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPad_kana_fifty.json'
            },
            {
              title: 'iPad用英数小文字アルファベット順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPad_english_lower.json'
            },
            {
              title: 'iPad用英数大文字アルファベット順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPad_english_upper.json'
            },
            {
              title: 'iPhone用かな五十音順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPhone_kana_fifty.json'
            },
            {
              title: 'iPhone用英数小文字アルファベット順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPhone_english_lower.json'
            },
            {
              title: 'iPhone用英数大文字アルファベット順キーボード',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPhone_english_upper.json'
            },
            {
              title: 'iPhone用数字テンキー',
              link:
                'https://azookey.netlify.app/static/mori_project_custard/iPhone_number_tenkey.json'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onCopy: function (e) {
      this.copy_succeed.target = e.text
      this.copy_succeed.bool = true
      // alert("You just copied: " + e.text);
    },
    onError: function (e) {
      this.copy_succeed.target = e.text
      this.copy_succeed.bool = false
      alert('コピーに失敗しました。')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_img {
  z-index: 1;
  width: 100vw;
}

.screenshot_img {
  z-index: 1;
  width: min(100%, 500px);
  border-radius: 0.1rem;
}

button {
  font-size: 0.8rem;
  padding: 0.3rem;
  font-weight: bold;
  border-radius: 0.1rem;
  border: none;
  background-color: #eeeeee;
}

button:active {
  background-color: #dddddd;
}

button:hover {
  background-color: #dddddd;
}

input {
  width: 50%;
  font-size: 0.8rem;
  padding: 0.3rem;
  border: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  border-color: #888888;
  color: #777777;
}

@media (max-width: 480px) {
  input {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.3rem;
    border: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    border-color: #888888;
    color: #777777;
  }
}

h2 {
  font-weight: bold;
  font-size: 1.5rem;
}

.text {
  display: inline-block;
}

blockquote {
  border-left: solid 5px #dddddd;
  padding-left: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #666666;
}
</style>
