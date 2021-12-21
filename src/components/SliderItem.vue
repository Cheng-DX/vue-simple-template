<template>
  <el-submenu v-if="hasChildren" :index="truePath(currentPath, item.path)">
    <template #title>
      <i v-if="hasIcon(item.meta)" :class="item.meta.icon" />
      <span>{{ item.name }}</span>
    </template>
    <slider-item
      v-for="(subItem, index) in item.children"
      :key="index"
      :item="subItem"
      :currentPath="truePath(currentPath, item.path)"
    />
  </el-submenu>
  <el-menu-item
    v-else
    :index="truePath(currentPath, item.path)"
    class="menu-item"
  >
    <i v-if="hasIcon(item.meta)" :class="item.meta.icon" :style="iconStyle" />
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script>
import SliderItem from './SliderItem.vue'
export default {
  name: "SliderItem",
  components: {
    SliderItem,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    currentPath: {
      type: String,
      default: "",
    },
  },
  methods: {
    truePath(currentPath, itemPath) {
      if (itemPath.startsWith("/")) {
        itemPath = itemPath.substring(1);
      }
      return currentPath + "/" + itemPath;
    },
    hasIcon(meta) {
      return meta != undefined && meta.icon != undefined;
    },
  },
  computed: {
    hasChildren() {
      let flag = this.item.children && this.item.children.length > 0;
      return flag;
    },
    iconStyle() {
      return {
        height: "18px",
        "margin-right": "7px",
      };
    },
  },
};
</script>

<style  scoped>
</style>