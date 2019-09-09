<template>
  <button
      class="button"
      :class="[typeClasses]"
      @click.prevent="e => onClick ? onClick(e) : null">
    <p reset-margin invert class="button-text">
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
      onClick: Function
    },
    data() {
      return {
        typeClasses: `button-${this.type}`
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/button/button";</style>