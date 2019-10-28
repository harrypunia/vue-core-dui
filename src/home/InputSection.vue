<template>
  <Card flat>
    <Grid column>
      <Grid center>
        <Type component="h2" noMargin>Input: &nbsp;</Type>
        <Type component="h3" noMargin>{{`${input} & ${customInput}`}}</Type>
      </Grid>
      <Input v-model="input" label="Input"/>
      <Input class="customInput" v-model="customInput" label="Custom CSS"/>
    </Grid>
  </Card>
</template>

<script>
  import Card from "../components/card/Card";
  import Grid from "../components/grid/Grid";
  import Input from "../components/input/Input";
  import Type from "../components/Type";

  export default {
    name: "InputSection",
    components: {Card, Grid, Input, Type},
    data() {
      return {
        input: "Input",
        customInput: "Custom Input"
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/inputSection";</style>