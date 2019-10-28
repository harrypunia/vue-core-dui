<template>
  <NavBar>
    <div slot="left">
      <Type component="h4" bold uppercase noMargin>Designed UI | DUI</Type>
    </div>
    <div slot="right">
      <NavButton>Home</NavButton>
      <NavButton>Components</NavButton>
      <NavButton>About</NavButton>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from "../components/nav/NavBar";
  import NavButton from "../components/nav/NavButton";
  import Type from "../components/Type";

  export default {
    name: "NavSection",
    components: {Type, NavBar, NavButton}
  };
</script>