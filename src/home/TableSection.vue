<template>
  <Grid>
    <Card flat>
      <Type invert center component="h2">Tables</Type>
      <Dropdown name="limit" :value.sync="limit" label="Rows per Page" :options="limits" z-index="20" style="width: 40px"/>
      <Table :sort="[0, 2]" hover :head="head" :rows="rows" :limit="limit"/>
      <Table :sort="[0, 2]" hover :head="head" :rows="rows" :limit="limit" class="customTable"/>
    </Card>
  </Grid>
</template>

<script>
  import Card from "../components/card/Card";
  import Dropdown from "../components/Dropdown";
  import Grid from "../components/grid/Grid";
  import Table from "../components/Table";
  import Type from "../components/Type";
  import {random} from "../util/math";

  export default {
    name: "TableSection",
    components: {Grid, Table, Type, Card, Dropdown},
    data() {
      return {
        limit: 5,
        limits: [2, 5, 10],
        head: ["S.No.", "Name", "Age", "Address", "Amount"],
        rows: [...Array(12)].map(() => [random(50), "Harry", random(40), `${random(99)} Street Name`, `$${random(9999)}`])
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/home/tableSection";</style>