<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans');

html,
body,
#app {
  height: 100%;
}

body {
  font-family: 'Work Sans', sans-serif;
}
</style>
