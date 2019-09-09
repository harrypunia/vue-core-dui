<template>
  <div class="dui-dropdown-container" :style="{zIndex: zIndex || 0, ...(getObjectKey(css, 'container'))}">
    <Grid
        center justify="space-between"
        class="dui-dropdown"
        @click.native.prevent="toggleDrawer"
        :style="getObjectKey(css, 'button')">
      <p reset-margin class="dui-dropdown-selected" :style="getObjectKey(css, 'buttonText')">{{value}}</p>
      <dui-icon
          :class="['dui-dropdown-icon', {'dui-dropdown-icon-rotate' : isDrawer}]"
          :icon="arrowIcon || 'chevron-down'"
          color="white"></dui-icon>
    </Grid>
    <div class="dui-dropdown-drawer" :class="{'dui-dropdown-drawer-open' : isDrawer}" :style="getObjectKey(css, 'drawer')">
      <h4 :key="index"
          v-for="(option, index) in options"
          class="dui-dropdown-drawer-item"
          :style="getObjectKey(css, 'drawerItem')"
          @click.prevent="() => onChange ? onChange(option, index) : select(option)">
        <span class="dui-dropdown-drawer-highlight" :style="getObjectKey(css, 'drawerHighlight')"></span>
        <span class="dui-dropdown-drawer-text" :style="getObjectKey(css, 'drawerText')">{{option}}</span>
      </h4>
    </div>
  </div>
</template>

<script>
  import Grid from "./grid/Grid";

  export default {
    name: "Input",
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      arrowIcon: String,
      options: Array,
      label: String,
      onChange: Function,
      zIndex: String,
      css: Object
    },
    components: {Grid},
    data() {
      return {
        value_: this.value,
        isDrawer: false,
        clickAwayListener: null
      }
    },
    created() {
      window.addEventListener('click', e => !this.$el.contains(e.target) ? this.isDrawer = false : null)
    },
    methods: {
      select(option) {
        this.isDrawer = false;
        this.value_ = option;
        this.$emit('update:value', this.value_);
      },
      toggleDrawer() {
        this.isDrawer = !this.isDrawer;
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/dropdown";</style>