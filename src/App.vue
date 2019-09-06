<template>
  <div id="app">
    <button @click.prevent="setDefault">Save State</button>
    <button @click.prevent="resetHomePage">Reset</button>
    <div style="width: 250px; margin: 20px">
      <p invert>Input: {{`${input} & ${customInput}`}}</p>
      <Input :value.sync="input" label="Input"/>
      <Input :value.sync="customInput" label="Custom CSS" :css="inputCSS"/>
    </div>
    <Card flat>
      <Grid wrap column>
        <p invert>Dropdown: {{`${dropdown} & ${customDropdown}`}}</p>
        <Grid>
          <Dropdown name="dropdown" :value.sync="dropdown" :options="dropDownOptions" label="Drop Down" zIndex="2"/>
          <Dropdown name="dropdown" :value.sync="customDropdown" :options="dropDownOptions" label="Drop Down" :css="dropdownCSS"/>
        </Grid>
      </Grid>
    </Card>
  </div>
</template>

<script>
  import Card from "./components/card/Card";
  import Dropdown from "./components/Dropdown";
  import Grid from "./components/grid/Grid";
  import Input from "./components/input/Input";
  import style from "./resources/jss/style";

  export default {
    name: 'app',
    components: {Input, Dropdown, Grid, Card},
    data() {
      return {
        ...style,
        input: "Input",
        customInput: "Custom Input",
        dropdown: "Drop Down",
        customDropdown: "Custom Drop Down",
        dropDownOptions: ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"],
      }
    },
    methods: {
      resetHomePage() {
        this.reset();
      }
    }
  }
</script>

<!--Avoid Scoping-->
<style lang="scss">@import "resources/scss/core/index";</style>
