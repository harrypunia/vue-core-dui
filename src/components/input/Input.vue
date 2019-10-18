<template>
  <div class="dui-input-container" :style="getObjectKey(css, 'container')">
    <input
        ref="input"
        class="dui-input"
        :style="getObjectKey(css, 'input')"
        v-bind="$attrs"
        @input="update($event)"
        v-on="$listeners"
    />
    <label class="dui-input-label" :class="labelCSS" :style="getObjectKey(css, 'label')">{{label}}</label>
    <div class="dui-input-underline" :style="css ? (css.underline || {}) : {}"></div>
    <div class="dui-input-underline-active" :style="css ? (css.activeUnderline || {}) : {}"></div>
  </div>
</template>

<script>
  export default {
    name: "Input",
    inheritAttrs: false,
    model: {
      event: "update"
    },
    props: {
      label: String,
      css: Object
    },
    data() {
      return {
        labelCSS: ""
      };
    },
    methods: {
      update(e) {
        this.$emit("update", e.target.value);
        this.labelCSS = e.target.value ? "dui-input-label-active" : "";
      }
    },
    mounted() {
      this.labelCSS = this.$refs["input"].value ? "dui-input-label-active" : "";
    }
  };
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/input/input";</style>