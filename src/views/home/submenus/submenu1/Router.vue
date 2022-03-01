<template>
  <div class="router_struct">
    <el-card style="height: 100%; width: 100%">
      <strong slot="header">{{ test }}</strong>
      <el-tree :data="routes" :props="props" default-expand-all :render-content="renderContent"></el-tree>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RouterStruct",
  data() {
    return {
      test: "name",
      props: {
        children: "children",
      },
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    renderContent(h, { node, data }) {
      let notLoad = data.meta && data.meta.notLoad;
      let icon = data.meta.icon ? data.meta.icon : "";
      return (
        <span class="custom-tree-node">
          <span>
            <i style="margin-right: 10px" class={icon} />
            <span>{data.name}</span>
            <span>{notLoad ? "  (该页面不会被加载)" : ""}</span>
          </span>
        </span>
      );
    },
  },
};
</script>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>