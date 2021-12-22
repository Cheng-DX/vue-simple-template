<template>
  <div class="root">
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
      style="width: 60vw"
    >
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="bottom-panel">
      <div class="user-card">
        <user-card :user="user" />
      </div>
      <div class="charts">
        <el-card>
          <template #header>
            <span>DCHART 随机图表</span>
          </template>
          <div v-for="chart in charts" :key="chart.id" class="chart-sample">
            <div class="chart-panel">
              <d-chart
                v-if="chart.fastMode"
                fastMode
                :xData="chart.xData"
                :yData="chart.yData"
                :title="chart.title"
                :label="chart.label"
                :type="chart.type"
              />
              <d-chart v-else :option="chart.option" />
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import SettingCard from "../../components/SettingCard.vue";
import UserCard from "../../components/UserCard.vue";
export default {
  name: "Me",
  components: { UserCard, SettingCard },
  data() {
    return {
      user: {
        name: "Cheng-DX",
      },
      charts: [],
    };
  },
  created() {
    this.$axios.get("/charts").then((res) => {
      console.log(res.data)
      this.charts = res.data;
    });
  },
  methods: {
    imageSrc(src) {
      return require(`../../assets/codeImages/${src}`);
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-panel {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.user-card {
  width: 25%;
  margin-inline: 10px;
}
.charts {
  width: 75%;
  margin-inline: 20px;
}
.chart-sample {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(158, 155, 155);
  border-radius: 10px;
  margin-block: 10px;
  width: 100%;
  height: 40vh;
}
.chart-panel {
  display: flex;
  width: 90%;
  height: 95%;
  padding: 5px;
  margin: 5px;
  border-color: #000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}
.code-image {
  height: 70%;
}
.code-block.markdown-toolbars {
  display: none;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>