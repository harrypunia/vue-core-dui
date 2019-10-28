<template>
  <Card flat>
    <Grid wrap center column>
      <Grid center>
        <Type component="h2" noMargin>Dropdown: &nbsp;</Type>
        <Type component="h3" noMargin>{{`${dropdown} & ${customDropdown}`}}</Type>
      </Grid>
      <Grid center>
        <Dropdown name="dropdown" :value.sync="dropdown" :options="dropDownOptions" label="Drop Down" zIndex="2"/>
        <Dropdown name="dropdown" class="customDropdown" :value.sync="customDropdown" :options="dropDownOptions" label="Drop Down"/>
      </Grid>
    </Grid>
  </Card>
</template>

<script>
  import Card from "../components/card/Card";
  import Dropdown from "../components/Dropdown";
  import Grid from "../components/grid/Grid";
  import Type from "../components/Type";

  export default {
    name: "DropdownSection",
    components: {Card, Grid, Dropdown, Type},
    data() {
      return {
        dropdown: "Drop Down",
        customDropdown: "Custom Drop Down",
        dropDownOptions: ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"]
      };
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/dropdownSection";</style>