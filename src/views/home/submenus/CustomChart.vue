<template>
  <div class="chart">
    <d-chart :option="option"></d-chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: null,
    }
  },
  created() {
    const data = [
      [1,2],
      [2,3],
      [1,1]
    ]
    this.option = {
      tooltip: {
        trigger: 'axis'
      },
      dataZoom: [
        {
          type: 'slider',
          filterMode: 'none'
        },
        {
          type: 'inside',
          filterMode: 'none'
        }
      ],
      xAxis: {},
      yAxis: {},
      series: [
        {
          type: 'custom',
          renderItem: function (params, api) {
            if (params.context.rendered) {
              return;
            }
            params.context.rendered = true;
            let points = [];
            for (let i = 0; i < data.length; i++) {
              points.push(api.coord(data[i]));
            }
            return {
              type: 'polygon',
              transition: ['shape'],
              shape: {
                points: points
              },
            };
          },
          clip: true,
          data: data
        }
      ]
    };
  }

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