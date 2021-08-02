<template>
  <div class="body">
    <my-main class="main" main="main"/>
    <mySidebar class="sidebar" sidebar="sidebar"/>
  </div>
</template>

<script>
import myMain from '../components/main'
import mySidebar from '../components/sidebar'

export default {
  setup() {

  },
  components: {myMain, mySidebar}
}
</script>

<style scoped lang="scss">
.body {
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 10px;
  grid-template-areas:
  'sidebar main';
  .sidebar {
    grid-area: sidebar;
  }
  .main {
    grid-area: main;
  }
  h2 {
    color: var(--black);
  }
}
</style>
