<template>
  <Grid center class="dui-badge" :class="size && `dui-badge-${size}`" :style="{...getObjectKey(css, 'container')}">
    <div v-if="$slots.default" class="dui-badge-icon">
      <slot></slot>
    </div>
    <p invert reset-margin :class="`dui-badge-text-${size}`">{{value}}</p>
  </Grid>
</template>

<script>
  import Grid from "./grid/Grid";

  export default {
    name: "Badge",
    components: {Grid},
    props: {
      value: {
        type: String,
        required: true
      },
      size: {
        type: String,
        validator: value => ["large", "small"].indexOf(value) !== -1
      },
      css: Object
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/components/badge";</style>