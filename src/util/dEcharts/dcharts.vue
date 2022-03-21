<template>
  <div class="vchart">
    <v-chart
      :option="currentOption"
      style="height: 100%; width: 100%"
      :key="1"
      ref="echart"
      :theme="mode"
      :autoresize="true"
    />
    <EchartsFull :mode="mode" ref="echartsFull" />
    <EchartsData ref="echartsData" />
  </div>
</template>

<script>
import EchartsData from "./echartsData.vue";
import EchartsFull from "./echartsFull.vue";
export default {
  name: "dcharts",
  components: {
    EchartsData,
    EchartsFull,
  },
  props: {
    // 目标option
    option: {
      type: Object,
      default: null,
    },
    title: {
      type: String,
      default: "DCHART",
    },
    // 主题模式
    mode: {
      type: String,
      default: "light",
    },
    // 禁用全屏工具
    disabledFullScreen: {
      type: Boolean,
      default: false,
    },
    // 禁用数据表格工具
    disabledTable: {
      type: Boolean,
      default: false,
    },
    // 快速模式，仅传入数据
    fastMode: {
      type: Boolean,
      default: false,
    },
    // 快速模式下的x轴数据
    xData: {
      type: Array,
      default: () => [],
    },
    // 快速模式下的y轴数据
    series: {
      type: Array | Object,
      default: () => {},
    },
    // 快速模式下的图表类型，支持line,bar,pie
    type: {
      type: String,
      default: "line",
    },
    theme: {
      type: Object,
      default: () => {
        // imageColor: "transparent" // 图片颜色
      },
    },
    // 是否开启label
    label: {
      type: [Boolean, String],
      default: false,
    },
    // label位置
    labelPosition: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      currentOption: null,
      test: 'text'
    };
  },
  mounted() {
    if (this.currentOption) {
      this.draw();
    }
  },
  watch: {
    // option: {
    //   handler(val) {
    //     this.currentOption = val;
    //     this.draw();
    //   },
    //   deep: true,
    // },
    type: {
      handler() {
        this.draw();
      },
      deep: true,
    },
    mode: {
      handler() {
        this.draw();
      },
      deep: true,
    },
    title: {
      handler() {
        this.draw();
      },
      deep: true,
    },
    label: {
      handler() {
        this.draw();
      },
      deep: true,
    },
    labelPosition: {
      handler() {
        this.draw();
      },
      deep: true,
    },
  },
  created() {
    this.currentOption = this.option;
    this.draw();
  },
  methods: {
    draw() {
      if (this.fastMode) {
        let xAxis1 = {
          type: "category",
          data: this.xData,
        };
        if (this.type === "pie") {
          xAxis1 = null;
        }
        this.currentOption = {
          backgroundColor: 'transparent',
          title: {
            text: this.title,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: [],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          label: {
            show: this.label === "true" || this.label === true ? true : false,
            position: this.labelPosition,
          },
          xAxis: xAxis1,
          yAxis: {
            type: "value",
          },
          series: this.series,
        }
        for (let item of this.currentOption.series) {
          if (!item.type) {
            item.type = this.type;
          }
          this.currentOption.legend.data.push(item.name ? item.name : item)
        }
      }
      if (this.currentOption) {
        this.currentOption.backgroundColor = 'transparent'
        if (this.currentOption.label) {
          this.currentOption.label.show =
            this.label === "true" || this.label === true ? true : false;
          this.currentOption.label.position = this.labelPosition;
        }
        if (this.currentOption.series) {
          this.currentOption["series"].forEach((item) => {
            if(!item.symbolSize){
              item.symbolSize = 1;
            } 
          });
        }
        let imageColor = "#01244b";
        if (this.mode === "light") {
          imageColor = "";
        }
        if (this.disabledExTools === true) {
          this.currentOption["toolbox"] = {
            feature: {
              restore: {},
              saveAsImage: {
                name: this.title,
                backgroundColor: imageColor,
                pixelRatio: 5,
              },
            },
          };
        } else {
          this.currentOption["toolbox"] = {
            feature: {
              restore: {},
              saveAsImage: {
                name: this.title,
                backgroundColor: imageColor,
                pixelRatio: 5,
              },
              myToolFull: {
                show: true,
                title: "Fullscreen",
                icon: "path://M733.549304 0l116.434359 116.23452-226.402521 226.40252 57.053835 57.068109 226.459617-226.445342 120.616689 120.41685V0H733.549304zM689.513507 619.855586l-57.068108 57.068109 224.232847 224.232847-122.64362 122.843458h293.676657V729.838022l-114.007751 114.207588-224.190025-224.190024zM338.197775 404.144414l57.068109-57.068109L171.033037 122.843458 293.676657 0H0v294.161978l114.022025-114.207588 224.17575 224.190024zM347.076305 624.294851L120.616689 850.754468 0 730.323343v293.676657h294.161978l-116.420084-116.23452 226.40252-226.40252-57.068109-57.068109z",
                onclick: (e) => {
                  this.$refs.echartsFull.show(e.getOption());
                },
              },
              myToolData: {
                show: true,
                title: "DataTable",
                icon: "M426.666667 427.52h213.333333V896h-213.333333V427.52zM725.333333 896h128c46.933333 0 85.333333-38.4 85.333334-85.333333v-384h-213.333334v469.333333z m128-768H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v128h810.666667V213.333333c0-46.933333-38.4-85.333333-85.333334-85.333333zM128 810.666667c0 46.933333 38.4 85.333333 85.333333 85.333333h128V426.666667H128v384z",
                onclick: (e) => {
                  this.$refs.echartsData.show(e.getOption());
                },
              },
            },
          };
          if (this.disabledFullScreen == true) {
            this.currentOption["toolbox"]["feature"]["myToolFull"][
              "show"
            ] = false;
          }
          if (this.disabledTable == true) {
            this.currentOption["toolbox"]["feature"]["myToolData"][
              "show"
            ] = false;
          }
        }
      }
    },
  },
  components: { EchartsData, EchartsFull },
};
</script>

<style scoped>
.vchart {
  height: 100%;
  width: 100%;
  color: lightgray;
}
</style>

