<template>
  <div>
    <NavSection/>
    <Grid wrap>
      <ButtonSection/>
      <InputSection/>
      <DropdownSection/>
      <BadgeSection/>
      <TableSection/>
    </Grid>
  </div>
</template>

<script>
  import Grid from "../components/grid/Grid";
  import BadgeSection from "./BadgeSection";
  import ButtonSection from "./ButtonSection";
  import DropdownSection from "./DropdownSection";
  import InputSection from "./InputSection";
  import NavSection from "./NavSection";
  import TableSection from "./TableSection";

  export default {
    name: "Home",
    components: {
      Grid,
      NavSection,
      ButtonSection,
      BadgeSection,
      InputSection,
      DropdownSection,
      TableSection
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/home";</style>