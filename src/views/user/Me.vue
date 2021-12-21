<template ref="test">
  <el-scrollbar class="me">
    <el-card v-for="(item, index) in cards" :key="index" class="card">
      <template #header>
        {{ item.title }}
      </template>
      <div style="height: 60vh">
        <d-chart
          fastMode
          :xData="xData"
          :yData="yData"
          title="快速模式构建"
          :type="chartType"
          :label="true"
        />
      </div>
      <div style="height: 60vh">
        <d-chart :option="option" title="直接传入option" />
      </div>
      <div style="height: 60vh">
        <d-chart :option="item.option" />
      </div>
      <div style="height: 60vh">
        <d-chart :option="option1" />
      </div>
    </el-card>
  </el-scrollbar>
</template>

<script>
export default {
  name: "Me",

  data() {
    return {
      xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      yData: [1, 2, 3, 4, 5, 6, 7],
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      cards: [
        {
          title: "d-chart",
          option: null,
        },
      ],
      chartType: "line",
      option1: null,
      option2: null,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
  created() {
    console.log("created");
    this.draw();
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push("A" + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.cards[0].option = {
      title: {
        text: "v-chart",
      },
      legend: {
        data: ["bar", "bar2"],
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ["stack"],
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: "bar",
          type: "bar",
          data: data1,
          emphasis: {
            focus: "series",
          },
          animationDelay: function (idx) {
            return idx * 10;
          },
        },
        {
          name: "bar2",
          type: "bar",
          data: data2,
          emphasis: {
            focus: "series",
          },
          animationDelay: function (idx) {
            return idx * 10 + 100;
          },
        },
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function (idx) {
        return idx * 5;
      },
    };
  },
  methods: {
    draw() {
      // Generate data
      let category = [];
      let dottedBase = +new Date();
      let lineData = [];
      let barData = [];
      for (let i = 0; i < 20; i++) {
        let date = new Date((dottedBase += 3600 * 24 * 1000));
        category.push(
          [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
        );
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
      }
      // option
      this.option1 = {
        backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["line", "bar"],
          textStyle: {
            color: "#ccc",
          },
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        series: [
          {
            name: "line",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 15,
            data: lineData,
          },
          {
            name: "bar",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
            },
            data: barData,
          },
          {
            name: "line",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            z: -12,
            data: lineData,
          },
          {
            name: "dotted",
            type: "pictorialBar",
            symbol: "rect",
            itemStyle: {
              color: "#0f375f",
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData,
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.card {
  height: 95%;
  width: 98%;
  margin: 1%;
}

.me {
  margin-top: -10px;
  padding-left: 1px;
  padding-right: 1px;
  --el-main-padding: 0px;
}
</style>