<template>
  <a class="dui-url" :class="urlClasses" :href="href" :target="newTab && '_blank'" :rel="external && 'noopener noreferrer'">
    <slot></slot>
  </a>
</template>

<script>

  export default {
    name: "Url",
    props: {
      href: Node,
      newTab: Boolean,
      external: Boolean,
      noMargin: Boolean,
      center: Boolean,
      invert: Boolean,
      bold: Boolean,
      uppercase: Boolean,
      lowercase: Boolean,
      underline: Boolean
    },
    data() {
      return {
        urlClasses: [
          this.noMargin && "dui-url-noMargin",
          this.center && "dui-url-center",
          this.invert && "dui-url-invert",
          this.bold && "dui-url-bold",
          this.uppercase && "dui-url-uppercase",
          this.lowercase && "dui-url-lowercase",
          this.underline && "dui-url-underline"
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/components/url";</style>