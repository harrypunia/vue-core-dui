<template>
  <Card flat>
    <Grid center column>
      <Type component="h2" no-margin>Buttons</Type>
      <div>
        <Button>Button</Button>
        <Button design="fill">Fill Button</Button>
        <Button design="rigid">Rigid Button</Button>
        <Button class="customButton">Custom Button</Button>
      </div>
    </Grid>
  </Card>
</template>

<script>
  import Button from "../components/button/Button";
  import Card from "../components/card/Card";
  import Grid from "../components/grid/Grid";
  import Type from "../components/Type";

  export default {
    name: "ButtonSection",
    components: {Card, Grid, Type, Button}
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/buttonSection";</style>