<template>
  <Grid class="dui-nav" align="center" justify="space-between" :class="navClasses">
    <Grid center class="dui-nav-left">
      <slot name="left"></slot>
    </Grid>
    <Grid center class="dui-nav-right">
      <slot name="right"></slot>
    </Grid>
  </Grid>
</template>

<script>
  import Grid from "../../components/grid/Grid";

  export default {
    name: "NavBar",
    components: {Grid},
    props: {
      sticky: Boolean,
      flat: Boolean
    },
    data() {
      return {
        navClasses: [
          this.sticky && "dui-nav-sticky",
          this.flat && "dui-nav-flat"
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navBar";</style>