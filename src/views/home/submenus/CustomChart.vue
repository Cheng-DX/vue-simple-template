<template>
  <div style="height:70vh;width: 80vw;">
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
      [2,3]
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
              type: 'polyline',
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

<style scoped>
</style>