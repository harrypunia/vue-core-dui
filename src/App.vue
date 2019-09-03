<template>
  <div id="app">
    <div style="width: 250px; margin: 20px">
      <p>Data Binding: {{input}}</p>
      <Input name="input" :value.sync="input" label="Input"/>
      <Input name="custom-css" :value.sync="customInput" label="Custom CSS" :css="inputCSS"/>
    </div>
  </div>
</template>

<script>
  import Input from "../src/components/input/Input";

  export default {
    name: 'app',
    components: {Input},
    data() {
      return {
        input: "Input",
        customInput: "Custom Input",
        inputCSS: {
          container: {
            background: "#f7f7f7",
            margin: "20px 0"
          },
          underline: {
            backgroundColor: "green",
          },
          activeUnderline: {
            backgroundColor: "purple"
          }
        }
      }
    }
  }
</script>

<style>
  html, body {
    font-family: sans-serif;
  }
</style>
