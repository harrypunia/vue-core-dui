<template>
  <div class="card" :class="[sizeClasses, shadowClasses, outlineClasses]" :style="getObjectKey(css, 'container')">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      size: {
        type: String,
        default: "auto",
        validator: value => ["auto", "small", "regular", "large"].indexOf(value) !== -1
      },
      css: Object,
      flat: Boolean,
      outline: Boolean
    },
    data() {
      return {
        sizeClasses: this.size && `card-${this.size}`,
        shadowClasses: !this.flat && "card-raised",
        outlineClasses: this.outline && "card-outline"
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/card/card";</style>