<template>
  <div class="dui-text">
    <h1 v-if="component === 'h1'" class="dui-text-global dui-text-h1" :class="textClasses">
      <slot></slot>
    </h1>
    <h2 v-else-if="component === 'h2'" class="dui-text-global dui-text-h2" :class="textClasses">
      <slot></slot>
    </h2>
    <h3 v-else-if="component === 'h3'" class="dui-text-global dui-text-h3" :class="textClasses">
      <slot></slot>
    </h3>
    <h4 v-else-if="component === 'h4'" class="dui-text-global dui-text-h4" :class="textClasses">
      <slot></slot>
    </h4>
    <p v-else class="dui-text-global dui-text-p" :class="textClasses">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Type",
    props: {
      component: {
        type: String,
        validator: value => ["h1", "h2", "h3", "h4", "p"].indexOf(value) !== -1
      },
      noMargin: Boolean,
      center: Boolean,
      bold: Boolean,
      uppercase: Boolean,
      lowercase: Boolean
    },
    data() {
      return {
        textClasses: [
          this.noMargin && "dui-text-noMargin",
          this.center && "dui-text-center",
          this.bold && "dui-text-bold",
          this.uppercase && "dui-text-uppercase",
          this.lowercase && "dui-text-lowercase"
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/components/type";</style>