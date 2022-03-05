<template>
  <div class="chart">
    <d-chart fast-mode mode="dark" :x-data="[1, 2, 3, 4, 5, 6]" :series="series"></d-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
          smooth: true,
        },
        {
          name: "销量2",
          type: "line",
          data: [1, 23, 3, 65, 3, 67],
          symbol: "emptyCircle",
          symbolSize: 10,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
$color: #d4101000;
.chart {
  height: 70vh;
  width: 80vw;
  background: $color;
}
</style>