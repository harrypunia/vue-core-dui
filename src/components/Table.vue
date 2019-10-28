<template>
  <div class="dui-table-container" :style="{height: `${scroll}px` || 'auto'}">
    <table class="dui-table" :class="tableClasses">
      <tr class="dui-table-head" :class="headClasses">
        <th :key="i"
            v-for="(v, i) in head"
            class="dui-table-head-cell dui-table-cell"
            :class="[
              {'dui-table-head-cell-sort' : isSorting(i)},
              {'dui-table-head-cell-sorted': sortBy === i}
              ]"
            @click="() => isSorting(i) && sortColumn(i)"
        >
          {{v}}
          <i v-if="isSorting(i)"
             class="fas fa-arrow-down dui-table-head-cell-arrow"
             :class="{'dui-table-head-cell-rotate': sortBy === i && !sortAsc}"></i>
        </th>
      </tr>
      <tr class="dui-table-row" :class="rowClasses" :key="i" v-for="(row, i) in getRows()">
        <td class="dui-table-row-cell dui-table-cell" :key="j" v-for="(v, j) in row">{{v}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Table",
    props: {
      page: {
        type: Number,
        validator: v => v > 0
      },
      limit: {
        type: Number,
        validator: v => v > 0
      },
      head: Array,
      rows: Array,
      sort: Array,
      hover: Boolean,
      scroll: Number
    },
    data() {
      return {
        sortBy: -1,
        sortAsc: true,
        tableClasses: [this.scroll && "dui-table-scroll"],
        headClasses: [this.scroll && "dui-table-head-sticky"],
        rowClasses: [this.hover && "dui-table-row-hover"]
      };
    },
    methods: {
      getRows() {
        return this.limit ? this.limitValues() : this.rows;
      },
      limitValues() {
        const page = this.page || 1;
        const firstIndex = (page - 1) * this.limit;
        return this.rows.slice(firstIndex, firstIndex + this.limit);
      },
      sortColumn(i) {
        this.sortBy === i ? this.sortAsc = !this.sortAsc : this.sortBy = i;
        const asc = this.sortAsc ? -1 : 1;
        this.rows.sort((a, b) => a[this.sortBy] < b[this.sortBy] ? asc : asc * -1);
      },
      isSorting(i) {
        return this.sort && this.sort.indexOf(i) !== -1;
      }
    }
  };
</script>

<style lang="scss" scoped>@import "../resources/scss/components/table";</style>