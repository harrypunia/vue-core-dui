<template>
  <div class="card" :class="[sizeClasses, shadowClasses]" :style="getObjectKey(css, 'container')">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      size: {
        type: String,
        default: "regular",
        validator: value => ["small", "regular", "large"].indexOf(value) !== -1
      },
      css: Object,
      flat: Boolean
    },
    data() {
      return {
        sizeClasses: this.size ? `card-${this.size}` : null,
        shadowClasses: !this.flat ? "card-raised" : null
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/card/card";</style>