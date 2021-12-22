<template>
  <el-dialog
    top="5vh"
    width="80%"
    :modal="true"
    center
    :title="title"
    append-to-body
    :visible.sync="dialogVisible"
    :modal-append-to-body="false"
    @closed="deleteData"
  >
    <el-table :data="tableData" style="width: 100%" height="75vh">
      <el-table-column type="index" width="60" sortable />
      <el-table-column
        v-for="(item, index) in labels"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        sortable
        min-width="100"
        align="center"
        :sort-method="(a, b) => sortMethod(a, b, item.prop)"
      />
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      sortMethod: function (a, b, prop) {
        let doubleA = parseFloat(a[prop]);
        let doubleB = parseFloat(b[prop]);
        if (doubleA > doubleB) {
          return 1;
        } else {
          return -1;
        }
      },
      dialogVisible: false,
      tableData: [],
      labels: [],
      title: "",
    };
  },
  methods: {
    deleteData() {
      this.tableData = [];
    },
    show(val) {
      this.tableData = [];
      this.labels = [];

      if (val.title === undefined) {
        this.title = "数据视图";
      } else {
        this.title = val.title[0].text;
      }

      let xLabel = val.xAxis[0].name;
      if (xLabel === "" || xLabel === undefined) {
        xLabel = "x";
      }
      this.labels.push({ prop: "-1", label: xLabel });
      for (let i = 0; i < val.series.length; i++) {
        let obj = {};
        obj["prop"] = i + "";
        let currentLabel = "";
        if (val.series[i].name === undefined) {
          if (val.series[i].yAxisIndex === undefined) {
            currentLabel = val.yAxis[0].name;
          } else {
            currentLabel = val.yAxis[val.series[i].yAxisIndex].name;
          }
        } else {
          currentLabel = val.series[i].name;
        }
        if (currentLabel === "" || currentLabel === undefined) {
          if (val.title != undefined) {
            currentLabel = val.title[0].text;
          }
        }
        obj["label"] = currentLabel;
        this.labels.push(obj);
      }
      for (let i = 0; i < val.xAxis[0].data.length; i++) {
        let obj = {};
        obj["-1"] = val.xAxis[0].data[i];
        for (let j = 0; j < val.series.length; j++) {
          let prop = j + "";
          obj[prop] = val.series[j].data[i];
        }
        this.tableData.push(obj);
      }
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #38353563;
  border-radius: 3px;
}

>>> .el-dialog__header {
  padding-top: 10 px;
  padding-right: 20 px;
  padding-bottom: 10 px;
  padding-left: 20 px;
}

>>> .el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10 px;
  color: rgba(0, 0, 0, 0.863);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

