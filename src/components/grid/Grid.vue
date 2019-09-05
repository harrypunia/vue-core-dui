<template>
  <div class="grid"
       :class="[dirClasses, centerClasses, justifyClasses, alignClasses]">
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
        default: "flex-start",
        validator: value => ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "initial", "unset"].indexOf(value) !== -1
      },
      align: {
        type: String,
        default: "flex-start",
        validator: value => ["flex-start", "flex-end", "center", "baseline", "stretch", "initial", "unset"].indexOf(value) !== -1
      },
      center: Boolean
    },
    data() {
      return {
        dirClasses: `grid-${this.direction}`,
        centerClasses: this.center ? "grid-align-center grid-justify-center" : null,
        justifyClasses: `grid-justify-${this.justify}`,
        alignClasses: `grid-align-${this.align}`
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/grid/grid";</style>