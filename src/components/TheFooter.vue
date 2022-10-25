<template>
  <footer class="footer_box">
    <AppIcon></AppIcon>
    <AppStoreLink class="appstoreicon"></AppStoreLink>
    <div class="footer_links">
      <a href="https://github.com/ensan-hcl/CustardKit" class="link"
        >CustardKit</a
      >
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.destination"
        class="link"
      >
        {{ link.name }}
      </router-link>
    </div>
  </footer>
</template>

<script>
import AppIcon from './AppIcon.vue'
import AppStoreLink from './AppStoreLink.vue'

export default {
  name: 'TheFooter',
  components: {
    AppIcon,
    AppStoreLink
  },
  data () {
    return {
      links: [
        {
          name: 'カスタムタブ',
          destination: '/CustomTabs'
        },
        {
          name: '利用規約',
          destination: '/TermsOfService'
        },
        {
          name: 'プライバシーポリシー',
          destination: '/PrivacyPolicy'
        },
        {
          name: 'Q&A',
          destination: '/QA'
        },
        {
          name: 'お問い合わせ',
          destination: '/Contact'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*safari限定*/
::-webkit-full-page-media,
:future,
:root .appstoreicon {
  top: 0px;
}
/*chrome限定*/
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .appstoreicon {
    top: 20px;
  }
}

.link {
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer_box {
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer_links {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: stretch;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #635959;
}
</style>
