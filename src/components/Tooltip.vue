<template>
  <div class="dui-tooltip-container" :style="getObjectKey(css, 'container')">
    <div class="dui-tooltip-content">
      <slot></slot>
    </div>
    <div class="dui-tooltip" :class="[positionClasses]">
      <p reset-margin class="dui-tooltip-message">{{msg}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tooltip",
    props: {
      name: {
        type: String,
        default: "tooltip"
      },
      msg: String,
      placement: {
        type: String,
        default: "top",
        validator: value => ["top", "right", "bottom", "left"].indexOf(value) !== -1
      },
      css: Object
    },
    data() {
      return {
        positionClasses: `dui-tooltip-placement-${this.placement}`
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/tooltip";</style>