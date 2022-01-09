<template>
  <div class="root">
    <el-carousel :interval="3000" height="200px" class="carousel">
      <el-carousel-item v-for="img in imgs" :key="img.id">
        <el-image
          style="height: 100%; width: 100%"
          fit="contain"
          :src="img.src"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="bottom-panel">
      <div class="user-card">
        <user-card :user="user" />
      </div>
      <div class="charts">
        <el-card>
          <template #header>
            <div class="charts-head">
              <h3>DCHART 随机图表</h3>
              <el-tag type="primary" style="margin-inline: 20px">
                <el-button
                  icon="el-icon-paperclip"
                  type="text"
                  size="small"
                  @click="openDChartGithubAddress"
                  >组件地址</el-button
                >
              </el-tag>
            </div>
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
import SettingCard from "components/SettingCard.vue";
import UserCard from "components/UserCard.vue";
export default {
  name: "Me",
  components: { UserCard, SettingCard },
  data() {
    return {
      user: {
        name: "Cheng-DX",
      },
      charts: [],
      imgs: [],
    };
  },
  created() {
    this.$axios.get("/demo/test1").then((res) => {
      this.$message.success(res.data);
    });
    this.$axios.get("/charts").then((res) => {
      this.charts = res.data;
    });
    let randomMount = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < randomMount; i++) {
      this.imgs.push({
        id: i,
        src: `https://picsum.photos/id/${Math.floor(
          Math.random() * 1000
        )}/2000/300`,
      });
    }
  },
  methods: {
    openDChartGithubAddress() {
      window.open("https://github.com/Cheng-DX/my-vue-echarts");
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
.charts-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.chart-sample {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #d4cecedc;
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

.carousel.el-carousel {
  width: 100%;
  margin-bottom: 20px;
}
</style>