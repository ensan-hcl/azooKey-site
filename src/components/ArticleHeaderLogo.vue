<template>
  <section>
    <router-link to="/">
      <img src="../assets/azooKeyLogo.png" class="icon" alt="logo" />
    </router-link>
    <router-link to="/">
      <img src="../assets/azooKeyTypo.png" class="typo" alt="azooKey" />
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ArticleHeaderLogo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  max-width: 64.4px;
  width: 22%;
  border-radius: 12%;
  max-width: 36px;
  max-height: 36px;
}
.typo {
  position: relative;
  top: 5px;
  padding-left: 5px;
  max-height: 40px;
}
</style>
