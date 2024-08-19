<template>
  <footer class="footer_box">
    <div class="footer_links">
      <a href="https://github.com/ensan-hcl/azooKey" class="link">azooKey on GitHub</a>
      <router-link v-for="link in links" :key="link.name" :to="link.destination" class="link">
        {{ link.name }}
      </router-link>
    </div>
    <AppIcon></AppIcon>
    <AppStoreLink class="appstoreicon"></AppStoreLink>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppIcon from './AppIcon.vue'
import AppStoreLink from './AppStoreLink.vue'

export default defineComponent({
  name: 'TheFooter',

  components: {
    AppIcon,
    AppStoreLink
  },

  data() {
    return {
      links: [
        {
          name: 'オープンソース',
          destination: '/OpenSource'
        },
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
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*safari限定*/
::-webkit-full-page-media,
:future,
:root .appstoreicon {
  top: 20px;
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
.link:hover,
.link:active {
  background-color: #ccafaf;
  border-radius: 4px;
}

.footer_box {
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer_links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
@media (max-width: 768px) {
  .footer_links {
    flex-direction: column;
  }
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
