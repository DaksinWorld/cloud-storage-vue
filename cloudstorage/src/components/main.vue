<template>
  <div class="main">
    {{main}}
  </div>
</template>

<script>
export default {
  props: ['main'],
  setup() {}
}
</script>

<style lang="scss" scoped>
  .main {
    text-align: left;
    background: var(--white);
    padding: 10px;
  }
</style>