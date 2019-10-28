<template>
  <button
      class="dui-button"
      :class="[buttonClasses]"
      :style="getObjectKey(css, 'button')"
      v-on="$listeners">
    <Type no-margin class="dui-button-text" :style="getObjectKey(css, 'text')">
      <slot></slot>
    </Type>
  </button>
</template>

<script>
  import Type from "../Type";

  export default {
    name: "Button",
    components: {Type},
    props: {
      design: {
        type: String,
        default: "outline",
        validator: value => ["fill", "outline", "rigid"].indexOf(value) !== -1
      },
      css: Object
    },
    data() {
      return {
        buttonClasses: `dui-button-${this.design}`
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/button/button";</style>