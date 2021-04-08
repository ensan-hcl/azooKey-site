<template>
  <header><slot></slot></header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #d5bab8;
  padding-bottom: 15px;
}
</style>