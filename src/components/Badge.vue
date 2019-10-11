<template>
  <Grid center class="dui-badge" :class="badgeClasses" :style="{...getObjectKey(css, 'container')}" @click.native.prevent="onClick(value)">
    <div v-if="$slots.default" class="dui-badge-icon">
      <slot></slot>
    </div>
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