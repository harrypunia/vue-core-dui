<template>
  <button
      class="dui-button"
      :class="[typeClasses]"
      :style="getObjectKey(css, 'button')"
      @click.prevent="e => onClick ? onClick(e) : null">
    <p reset-margin invert class="dui-button-text" :style="getObjectKey(css, 'text')">
      <slot></slot>
    </p>
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        default: "outline",
        validator: value => ["fill", "outline", "rigid"].indexOf(value) !== -1
      },
      css: Object,
      onClick: Function
    },
    data() {
      return {
        typeClasses: `dui-button-${this.type}`
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/button/button";</style>