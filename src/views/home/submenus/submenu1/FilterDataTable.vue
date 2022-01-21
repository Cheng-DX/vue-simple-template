<template>
  <div class="root-filter-data-table">
    <el-button @click="visible = true">OPEN</el-button>
    <el-dialog :visible.sync="visible" class="dialog" width="95%" top="20px">
      <el-table
        :data="currentData"
        border
        :cell-style="addStyle"
        height="78vh"
        v-loading="tableLoading"
        highlight-current-row
        show-summary
        :summary-method="averageMethod"
        sum-text="均值"
        :header-cell-style="{
          color: '#3b3b3b',
          fontSize: '15px',
          fontWeight: '800',
        }"
      >
        <el-table-column
          v-for="item in labelsAndProps"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          sortable
          :sort-method="(a, b) => sortMethod(a, b, item.prop)"
          min-width="120px"
          align="center"
        />
      </el-table>
      <div style="display: flex; justify-content: center">
        <el-pagination
          background
          :total="totalPage"
          :page-size="pageSize"
          layout="sizes,total,prev, pager, next, jumper"
          :pager-count="7"
          :page-sizes="[10, 20, 30, 100, totalPage]"
          @current-change="currentChange"
          @size-change="sizeChange"
          class="pagination"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      errorMap: null,
      labelsAndProps: [],
      visible: false,
      totalPage: 320,
      currentPage: 1,
      pageSize: 10,
      currentData: [],
      tableLoading: false,
    };
  },
  methods: {
    averageMethod({ columns, data }) {
      let result = []
      columns.forEach(column => {
        const prop = column.property
        let sum = 0
        if (prop !== 'time') {
          for (let i = 0; i < data.length; i++) {
            sum += Number(data[i][prop])
          }
          const average = (sum / data.length).toFixed(2)
          result.push(average)
        } else {
          result.push('均值')
        }
      })
      return result
    },
    sortMethod(a, b, prop) {
      a = a[prop]
      b = b[prop]
      if (typeof Number(a) === 'number' && typeof Number(b) === 'number') {
        return Number(a) - Number(b)
      } else {
        return a.localeCompare(b)
      }
    },
    currentChange(val) {
      this.currentPage = val;

      this.currentData = this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    sizeChange(val) {
      this.tableLoading = true;
      setTimeout(() => {
        this.pageSize = val;
        this.currentData = this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        this.tableLoading = false;
      }, 1000);
    },
    addStyle({ row, column, rowIndex, columnIndex }) {
      const prop = column.property;
      const time = row.time;
      if (this.errorMap[prop] && this.errorMap[prop][time]) {
        return {
          background: "#de4141",
          color: "#fff",
          fontSize: "13px",
        };
      } else {
        return {
          background: "#fff",
          color: "#414141",
          fontSize: "13px",
        };
      }
    },
  },
  created() {
    this.$axios.get("/getAllData").then((res) => {
      const data = res.data;
      const dateList = data.dateList;
      const lineData = data.line;
      let tableData = [];
      let firstTime = true;
      for (let prop in lineData) {
        for (let i = 0; i < dateList.length; i++) {
          if (firstTime) {
            let item = {
              time: dateList[i],
            };
            tableData.push(item);
          }
          tableData[i][prop] = lineData[prop][i];
        }
        if (firstTime) {
          firstTime = false;
        }
      }
      this.tableData = tableData;
      this.currentData = this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    });
    this.$axios.get("/getErrorData").then((res) => {
      let errorMap = {};
      const data = res.data.errorList;
      for (let item of data) {
        const prop = item.prop;
        const date = item.date;
        if (errorMap[prop] === undefined) {
          errorMap[prop] = {};
        }
        errorMap[prop][date] = true;
      }
      this.errorMap = errorMap;
    });
    this.$axios.get("/getProp2label").then((res) => {
      const data = res.data;
      let labelsAndProps = [];
      labelsAndProps.push({
        label: "时间",
        prop: "time",
      });
      for (let i = 0; i < data.props.length; i++) {
        labelsAndProps.push({
          label: data.labels[i],
          prop: data.props[i],
        });
      }
      this.labelsAndProps = labelsAndProps;
    });
  },
};
</script>

<style scoped>
.root-filter-data-table {
  width: 100%;
  height: 100%;
}
.pagination {
  margin-top: 20px;
}
</style>
