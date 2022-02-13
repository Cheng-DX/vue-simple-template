<template>
  <div class="dashboard-root">
    <Ribbon
      text="STAR ME ON GITHUB🐰"
      url="https://github.com/Cheng-DX/vue-simple-template"
      position="right-bottom"
      color="#73549E"
      fixed
    />
    <el-row>
      <el-col :md="{ span: 12 }" :span="24">
        <el-card>
          <div slot="header" class="header">
            <el-tag style="margin-right: 20px;">仓库名</el-tag>
            <el-input placeholder="repo name" v-model="repoName" />
          </div>
          <div class="commit-timeline">
            <el-timeline>
              <el-timeline-item
                v-for="commit in commits"
                :key="commit.time"
                :timestamp="commit.time"
                placement="top"
                size="large"
                :type="randomType()"
                :icon="randomIcon()"
              >
                <commit-item
                  :content="commit.content"
                  :time="commit.time"
                  :avatar="commit.avatar"
                  :username="commit.username"
                />
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Ribbon from "vue-ribbon";
import CommitItem from "components/CommitItem.vue";
export default {
  components: {
    Ribbon,
    CommitItem,
  },
  data() {
    return {
      repoName: "vue-simple-template",
      repoInfo: null,
      commits: [],
    };
  },
  methods: {
    randomType() {
      const types = ["success", "warning", "danger", "primary"];
      return types[Math.floor(Math.random() * types.length)];
    },
    randomIcon() {
      const icons = ["el-icon-light-rain",
        "el-icon-lightning",
        "el-icon-heavy-rain",
        "el-icon-sunrise",
        "el-icon-sunrise-1",
        "el-icon-sunset",
        "el-icon-sunny",
        "el-icon-cloudy",
        "el-icon-partly-cloudy",
        "el-icon-cloudy-and-sunny",
        "el-icon-moon",
        "el-icon-moon-night"]
      return icons[Math.floor(Math.random() * icons.length)];
    }
  },
  created() {
    this.$axios
      .get(`https://api.github.com/repos/Cheng-DX/${this.repoName}`)
      .then((res) => {
        this.repoInfo = res.data;
      });
    this.$axios
      .get(`https://api.github.com/repos/Cheng-DX/${this.repoName}/commits`)
      .then((res) => {
        console.log(res.data)
        const data = res.data;
        let commits = []
        for (let item of data) {
          commits.push({
            time: item.commit.author.date.replace(/T/g, " ").replace(/Z/g, ""),
            content: item.commit.message,
            avatar: item.committer.avatar_url,
            username: item.committer.login,
          })
        }
        this.commits = commits;
      })
  },
  computed: {
    githubUsername() {
      return this.$store.state.githubUsername;
    },
  },
};
</script>
<style scoped lang="scss">
.commit-timeline {
  .el-timeline {
    padding: 10px;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>