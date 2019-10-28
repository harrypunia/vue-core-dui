<template>
  <Card flat>
    <Grid column center nowrap>
      <Type component="h2" noMargin>Badges</Type>
      <Grid>
        <Badge value="Vue"/>
        <Badge value="Dui"/>
        <Badge value="Scss"/>
      </Grid>
      <Grid style="margin-top: 10px">
        <Badge size="small" value="Vue"/>
        <Badge size="small" value="Dui"/>
        <Badge size="small" value="Scss"/>
      </Grid>
    </Grid>
  </Card>
</template>

<script>
  import Badge from "../components/Badge";
  import Card from "../components/card/Card";
  import Grid from "../components/grid/Grid";
  import Type from "../components/Type";

  export default {
    name: "BadgeSection",
    components: {Card, Badge, Grid, Type}
  };
</script>