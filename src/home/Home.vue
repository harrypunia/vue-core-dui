<template>
  <Grid center column>
    <Button :onClick="e => setDefault()">Save State</Button>
    <Button :onClick="resetHomePage" type="fill">Reset</Button>
    <Button class="customButton" :onClick="resetHomePage" type="fill">Custom Button</Button>
    <div style="width: 250px; margin: 20px">
      <p invert>Input: {{`${input} & ${customInput}`}}</p>
      <Input :value.sync="input" label="Input"/>
      <Input class="customInput" :value.sync="customInput" label="Custom CSS"/>
    </div>
    <Card flat>
      <Grid wrap center column>
        <p invert>Dropdown: {{`${dropdown} & ${customDropdown}`}}</p>
        <Grid center>
          <Dropdown name="dropdown" :value.sync="dropdown" :options="dropDownOptions" label="Drop Down" zIndex="2"/>
          <Dropdown name="dropdown" class="customDropdown" :value.sync="customDropdown" :options="dropDownOptions" label="Drop Down"/>
        </Grid>
      </Grid>
      <Grid>
        <Badge value="Vue" />
        <Badge value="Dui">❌️</Badge>
      </Grid>
    </Card>
  </Grid>
</template>

<script>
  import Button from "../components/button/Button";
  import Card from "../components/card/Card";
  import Dropdown from "../components/Dropdown";
  import Grid from "../components/grid/Grid";
  import Input from "../components/input/Input";
  import Badge from "../components/Badge";

  export default {
    name: "Home",
    components: {Input, Dropdown, Grid, Card, Button, Badge},
    data() {
      return {
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

<style lang="scss" scoped>@import "../resources/scss/home/home";</style>