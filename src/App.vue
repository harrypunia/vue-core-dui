<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
  import Home from "./home/Home"

  export default {
    name: 'app',
    components: {Home}
  }
</script>

<!--Avoid Scoping-->
<style lang="scss">@import "resources/scss/core/index";</style>
