<template>
  <Url class="dui-nav-button" v-bind="$attrs">
    <slot></slot>
  </Url>
</template>

<script>
  import Url from "../../components/Url";

  export default {
    name: "NavButton",
    components: {Url},
    data() {
      return {
        buttonClasses: []
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButton";</style>