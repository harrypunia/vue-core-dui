<template>
  <div class="dui-input-container" :style="css ? (css.container || {}) : {}">
    <input
        :name="name" :type="type || 'text'"
        class="dui-input"
        v-model="value_"
        :style="getObjectKey(css, 'input')"
        @input="onChange ? onChange(value) : onInput()"
    />
    <label
        :for="name"
        class="dui-input-label"
        :class="{'dui-input-label-active' : value}"
        :style="css ? (css.label || {}) : {}">
      {{label}}
    </label>
    <div class="dui-input-underline" :style="css ? (css.underline || {}) : {}"></div>
    <div class="dui-input-underline-active" :style="css ? (css.activeUnderline || {}) : {}"></div>
  </div>
</template>

<script>
  export default {
    name: "Input",
    props: {
      name: {
        type: String,
        default: "input"
      },
      value: {
        type: String,
        required: true
      },
      type: String,
      label: String,
      onChange: Function,
      css: Object
    },
    data() {
      return {
        value_: this.value
      }
    },
    watch: {
      value(val) {
        this.value_ = val;
      }
    },
    methods: {
      onInput() {
        this.$emit('update:value', this.value_);
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/input/input";</style>