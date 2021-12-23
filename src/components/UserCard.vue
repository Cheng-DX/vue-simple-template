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
          <a class="text-muted" href="http://www.github.com/Cheng-DX">Cheng-DX</a>
        </div>
      </div>

      <div class="user-bio-section">
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>Vue</span>
            <el-progress :percentage="30" />
          </div>
          <div class="progress-item">
            <span>JavaScript</span>
            <el-progress :percentage="6" />
          </div>
          <div class="progress-item">
            <span>Css</span>
            <el-progress :percentage="5" />
          </div>
          <div class="progress-item">
            <span>ESLint</span>
            <el-progress :percentage="0" status="warning" />
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
