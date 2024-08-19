<template>
  <div>
    <PageHeader>
      <img src="/static/assets/customtabs_header0.png" class="header_img" />
      <h1><span class="text">カスタム</span><span class="text">タブ</span></h1>
    </PageHeader>

    <PageArticle>
      <h2>カスタムタブ機能について</h2>
      <div v-for="item in introductions" :key="item.header">
        <h3>{{ item.header }}</h3>
        <p v-html="item.contents"></p>
      </div>
      <h2>カスタムタブの作例</h2>
      <p>カスタムタブはとても自由度の高い機能です。そこでいくつか作例を紹介します。</p>
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
          <button type="button" @click="copyToClipboard(item.link)">リンクをコピーする</button>
          <span v-if="copy_succeed.target === item.link && copy_succeed.bool">✔️</span>
          <input type="text" :value="item.link" readonly />
        </p>
        <img :src="item.image" class="screenshot_img" />
      </div>
      <div v-for="authorItem in user_made_customtabfiles" :key="authorItem.author">
        <h3 v-html="authorItem.author + 'さまのカスタムタブ'"></h3>
        <p v-html="'連絡先: ' + authorItem.author_contacts"></p>
        <p v-html="authorItem.description"></p>
        <blockquote>
          <p v-html="authorItem.author_description"></p>
        </blockquote>
        <div v-for="image in authorItem.images" :key="image">
          <img :src="image" class="screenshot_img" />
        </div>
        <div v-for="item in authorItem.files" :key="item.link">
          <h4>{{ item.title }}</h4>
          <p>
            <button type="button" @click="copyToClipboard(item.link)">リンクをコピーする</button>
            <span v-if="copy_succeed.target === item.link && copy_succeed.bool">✔️</span>
            <input type="text" :value="item.link" readonly />
          </p>
        </div>
      </div>
    </PageArticle>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import TheFooter from '../TheFooter.vue'
import PageHeader from '../PageHeader.vue'
import PageArticle from '../PageArticle.vue'

const copy_succeed = ref({
  target: '',
  bool: false
})

const introductions = ref([
  {
    header: 'できること',
    contents:
      'カスタムタブ機能はazooKeyにオリジナルのタブを追加することを可能にする新しい機能です。定型文を入力するキーボードを作ったり、入力しづらい記号を集めたキーボードを作ったりすることができます。'
  },
  {
    header: '作り方',
    contents: `azooKeyアプリ内ではフリック式・スクロール式のカスタムタブを作ることができます。さらに高度なカスタムタブを作るには<a href="https://github.com/ensan-hcl/CustardKit">CustardKit</a>が便利です。`
  }
])

const customtabfiles = ref([
  {
    title: 'GODAN',
    description: 'GODAN配列がazooKeyでも使えるようになるテンキースタイルのカスタムタブです。',
    link: 'https://azookey.netlify.app/static/custard/godan.json',
    image: '/static/assets/custard_godan.jpg'
  },
  {
    title: 'ヒエログリフ',
    description: 'ヒエログリフを簡単に入力できるスクロール式のカスタムタブです。',
    link: 'https://azookey.netlify.app/static/custard/hieroglyphs.json',
    image: '/static/assets/custard_hieroglyphs.jpg'
  }
  // 追加のカスタムタブファイル情報をここに追加します
])

const user_made_customtabfiles = ref([
  {
    author: '森プロジェクト',
    images: [
      '/static/assets/mori_project_custard_iPad_fifty.jpg',
      '/static/assets/mori_project_custard_iPhone_fifty.jpg'
    ],
    description:
      '森プロジェクトさまから工夫を凝らした五十音のキーボードのカスタムタブファイルをご提供いただきました。iPad版は3ファイル、iPhone版は4ファイルあります。',
    author_description: 'あったらいいなと思う機能を追加した五十音キーボードです。',
    author_contacts: "<a href='https://twitter.com/mori_project'>𝕏（Twitter）</a>",
    files: [
      {
        title: 'iPad用かな五十音順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPad_kana_fifty.json'
      },
      {
        title: 'iPad用英数小文字アルファベット順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPad_english_lower.json'
      },
      {
        title: 'iPad用英数大文字アルファベット順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPad_english_upper.json'
      },
      {
        title: 'iPhone用かな五十音順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPhone_kana_fifty.json'
      },
      {
        title: 'iPhone用英数小文字アルファベット順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPhone_english_lower.json'
      },
      {
        title: 'iPhone用英数大文字アルファベット順キーボード',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPhone_english_upper.json'
      },
      {
        title: 'iPhone用数字テンキー',
        link: 'https://azookey.netlify.app/static/mori_project_custard/iPhone_number_tenkey.json'
      }
    ]
  }
])

const { copy } = useClipboard()

const copyToClipboard = async (link: string) => {
  try {
    await copy(link)
    copy_succeed.value = { target: link, bool: true }
  } catch (error) {
    copy_succeed.value = { target: link, bool: false }
    alert('コピーに失敗しました。')
  }
}
</script>

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
