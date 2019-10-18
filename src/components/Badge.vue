<template>
  <Grid center class="dui-badge" :class="badgeClasses" :style="{...getObjectKey(css, 'container')}" @click.native.prevent="onClick(value)">
    <p v-if="prefix" class="dui-badge-icon">{{prefix}}</p>
    <Type invert no-margin>{{value}}</Type>
  </Grid>
</template>

<script>
  import Grid from "./grid/Grid";
  import Type from "./Type";

  export default {
    name: "Badge",
    components: {Type, Grid},
    props: {
      value: {
        type: String,
        required: true
      },
      size: {
        type: String,
        validator: value => ["large", "small"].indexOf(value) !== -1
      },
      prefix: String,
      css: Object,
      hover: Boolean,
      onClick: Function
    },
    data() {
      return {
        badgeClasses: [
          this.size && `dui-badge-${this.size}`,
          this.hover && "dui-badge-hover"
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/components/badge";</style>