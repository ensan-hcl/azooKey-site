<template>
  <a
    href="https://apps.apple.com/us/app/azookey/id1542709230"
    style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px"
  >
    <img
      src="/static/assets/AppStore_badge_jp.svg"
      class="appstoreicon"
      alt="Download on the App Store"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppStoreLink'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appstoreicon {
  border-radius: 13px;
  width: 200px;
  height: 64.4px;
  background-size: contain;
  position: relative;
}
</style>
