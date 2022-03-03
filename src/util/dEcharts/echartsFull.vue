<template>
  <el-dialog
    top="5vh"
    width="90%"
    :modal="true"
    append-to-body
    :visible.sync="dialogVisible"
    :modal-append-to-body="false"
    :close-on-click-modal="false"
    fullscreen
    :class="dialogClass"
  >
    <div style="height: 85vh; width: 95vw">
      <v-chart
        :option="option"
        style="height: 100%; width: 100%"
        id="dialogBox"
        :key="1"
        ref="echart1"
        :autoresize="true"
      />
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
    },
  },
  computed:{
    dialogClass(){
      return this.mode == "light" ? "dialogLight" : "dialogDark";
    }
  },
  data() {
    return {
      dialogVisible: false,
      option: null,
    };
  },
  created() {
    if (this.mode == "light") {
      this.dialogClass = "dialogLight"
    }
  },
  methods: {
    show(val) {
      let length = val.series.length;
      for (let i = 0; i < length; i++) {
        if (val.series[i].label.show != undefined)
          val.series[i].label.show = false;
      }
      val.grid = [
        {
          left: "5%",
          right: "5%",
          top: "10%",
          bottom: "10%",
        },
      ];

      val.toolbox[0].feature.myToolFull.show = false;
      if (val.toolbox[0].feature.dataZoom != undefined)
        val.toolbox[0].feature.dataZoom.show = false;

      if (val.toolbox[0].feature.dataView != undefined)
        val.toolbox[0].feature.dataView.show = false;

      (val.dataZoom = [
        {
          type: "slider",
          show: true,
          xAxisIndex: [0],
          dataBackground: {
            areaStyle: {
              color: "#d7f2f3",
            },
          },
          bottom: "bottom",
          textStyle: {
            color: "#d7f2f3",
          },
        },
      ]),
        this.$nextTick(() => {
          this.option = val;
          this.dialogVisible = true;
        });
    },
  },
};
</script>

<style scoped>
.dialogDark >>> .el-dialog {
  background: #100c2a;
}
.dialogDark >>> .el-dialog__title {
  color: #dcdf31;
}

.dialogLight >>> .el-dialog {
  background: #fffffff6;
}
.dialogLight >>> .el-dialog__title {
  color: #000000bb;
}
</style>

