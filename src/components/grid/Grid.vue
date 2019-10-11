<template>
  <div class="dui-grid" :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Grid",
    props: {
      direction: {
        type: String,
        default: "row",
        validator: value => ["column", "row"].indexOf(value) !== -1
      },
      justify: {
        type: String,
        validator: value => ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "initial", "unset"].indexOf(value) !== -1
      },
      align: {
        type: String,
        validator: value => ["flex-start", "flex-end", "center", "baseline", "stretch", "initial", "unset"].indexOf(value) !== -1
      },
      column: Boolean,
      wrap: Boolean,
      center: Boolean,
      inline: Boolean
    },
    data() {
      return {
        gridClasses: [
          this.direction && `dui-grid-${this.direction}`,
          this.center && "dui-grid-align-center dui-grid-justify-center",
          this.justify && `dui-grid-justify-${this.justify}`,
          this.align && `dui-grid-align-${this.align}`,
          this.wrap && "dui-grid-wrap",
          this.column && "dui-grid-column",
          this.inline && "dui-grid-inline"
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/grid/grid";</style>