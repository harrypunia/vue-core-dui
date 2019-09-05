<template>
  <div id="app">
    <div style="width: 250px; margin: 20px">
      <p invert>Input: {{`${input} & ${customInput}`}}</p>
      <Input name="input" :value.sync="input" label="Input"/>
      <Input name="custom-css" :value.sync="customInput" label="Custom CSS" :css="inputCSS"/>
    </div>
    <div style="width: 250px; margin: 20px">
      <p invert>Dropdown: {{`${dropdown} & ${customDropdown}`}}</p>
      <Dropdown name="dropdown" :value.sync="dropdown" :options="dropDownOptions" label="Drop Down" zIndex="2"/>
      <Dropdown name="dropdown" :value.sync="customDropdown" :options="dropDownOptions" label="Drop Down" :css="dropdownCSS"/>
    </div>
  </div>
</template>

<script>
  import Dropdown from "./components/Dropdown";
  import Input from "./components/input/Input";
  import style from "./resources/jss/style";

  export default {
    name: 'app',
    components: {Input, Dropdown},
    data() {
      return {
        ...style,
        input: "Input",
        customInput: "Custom Input",
        dropdown: "Drop Down",
        customDropdown: "Custom Drop Down",
        dropDownOptions: ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"],
      }
    }
  }
</script>

<!--Avoid Scoping-->
<style lang="scss">@import "resources/scss/core/index";</style>
