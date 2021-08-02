<template>
  <div class="sidebar">
    {{sidebar}}
  </div>
</template>

<script>
export default {
  props: ['sidebar'],
  setup() {}

}
</script>

<style lang="scss" scoped>
  .sidebar {
    background: var(--primary);
    color: white;
    float: left;
    padding: 10px;
    border-radius: 20px;
    height: 100vh;
  }
</style>