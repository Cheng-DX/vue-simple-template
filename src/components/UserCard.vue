<template>
  <el-card style="margin-bottom: 20px">
    <div slot="header" class="clearfix">
      <h3>About me</h3>
    </div>

    <div class="box-center">
      <div class="user-name text-center">{{ user.name }}</div>
    </div>

    <div class="user-bio">
      <div class="user-bio-section">
        <div class="user-bio-section-header">
          <span>Github</span>
        </div>
        <div class="user-bio-section-body">
          <a class="text-muted" href="http://www.github.com/Cheng-DX"
            >Cheng-DX</a
          >
        </div>
      </div>

      <div class="user-bio-section">
        <div class="user-bio-section-body">
          <div v-for="skill in skills" :key="skill.id" class="progress-item">
            <span>{{ skill.name }}</span>
            <el-progress
              :percentage="skill.score"
              :color="skill.color"
            />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: "",
          email: "",
          avatar: "",
          role: "",
        };
      },
    },
  },
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "vue",
          score: 30,
          status: "success",
          color: "#409EFF",
        },
        {
          id: 2,
          name: "vuex",
          score: 10,
          status: "warning",
          color: "#409EFF",
        },
        {
          id: 3,
          name: "vue-router",
          score: 30,
          status: "success",
          color: "#409EFF",
        },
        {
          id: 4,
          name: "vite",
          score: 20,
          status: "success",
          color: "#409EFF",
        },
        {
          id: 5,
          name: "element-ui",
          score: 60,
          status: "success",
          color: "#409EFF",
        },
        {
          id: 6,
          name: "vue-echarts",
          score: 50,
          status: "success",
          color: "#409EFF",
        },
        {
          id: 7,
          name: "element-plus",
          score: 1,
          status: "success",
          color: "#409EFF",
        }
      ],
    };
  },
};
</script>

<style scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
.user-name {
  font-weight: bold;
}

.box-center {
  padding-top: 10px;
}
.user-bio {
  margin-top: 10px;
  color: #606266;
}
.user-bio-section {
  font-size: 14px;
  padding: 15px 0;
}

.user-bio-section-header {
  border-bottom: 1px solid #dfe6ec;
  padding-bottom: 2px;
  margin-bottom: 2px;
  font-weight: bold;
}
</style>
