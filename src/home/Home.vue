<template>
  <div>
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
    <Grid wrap>
      <Card>
        <Grid center column>
          <Type component="h2" invert no-margin>Buttons</Type>
          <div>
            <Button :onClick="e => setDefault()">Save State</Button>
            <Button :onClick="resetHomePage" type="fill">Reset</Button>
            <Button class="customButton" :onClick="resetHomePage" type="fill">Custom Button</Button>
          </div>
        </Grid>
      </Card>
      <Card>
        <Grid column>
          <Grid center>
            <Type component="h2" invert noMargin>Input: &nbsp;</Type>
            <Type component="h3" invert noMargin>{{`${input} & ${customInput}`}}</Type>
          </Grid>
          <Input :value.sync="input" label="Input"/>
          <Input class="customInput" :value.sync="customInput" label="Custom CSS"/>
        </Grid>
      </Card>
      <Card>
        <Grid wrap center column>
          <Grid center>
            <Type component="h2" invert noMargin>Dropdown: &nbsp;</Type>
            <Type component="h3" invert noMargin>{{`${dropdown} & ${customDropdown}`}}</Type>
          </Grid>
          <Grid center>
            <Dropdown name="dropdown" :value.sync="dropdown" :options="dropDownOptions" label="Drop Down" zIndex="2"/>
            <Dropdown name="dropdown" class="customDropdown" :value.sync="customDropdown" :options="dropDownOptions" label="Drop Down"/>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Grid column center>
          <Type component="h2" invert noMargin>Badges</Type>
          <Grid>
            <Badge :key="i" v-for="(badge, i) in badges" :value="badge" :onClick="removeBadge" hover>❌</Badge>
          </Grid>
          <Grid column>
            <Input :value.sync="newBadge" label="Tag"/>
            <Button :onClick="addBadge" type="fill">Add</Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </div>
</template>

<script>
  import Badge from "../components/Badge";
  import Button from "../components/button/Button";
  import Card from "../components/card/Card";
  import Dropdown from "../components/Dropdown";
  import Grid from "../components/grid/Grid";
  import Input from "../components/input/Input";
  import NavBar from "../components/nav/NavBar";
  import NavButton from "../components/nav/NavButton";
  import Type from "../components/Type";

  export default {
    name: "Home",
    components: {Input, Dropdown, Grid, Card, Button, Badge, Type, NavBar, NavButton},
    data() {
      return {
        input: "Input",
        customInput: "Custom Input",
        dropdown: "Drop Down",
        customDropdown: "Custom Drop Down",
        dropDownOptions: ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"],
        badges: ["Vue", "Dui"],
        newBadge: ""
      };
    },
    methods: {
      resetHomePage() {
        this.reset();
      },
      addBadge() {
        this.badges.push(this.newBadge);
        this.newBadge = "";
      },
      removeBadge(val) {
        const idx = this.badges.findIndex(b => b === val);
        this.badges.splice(idx, 1);
      }
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/home";</style>