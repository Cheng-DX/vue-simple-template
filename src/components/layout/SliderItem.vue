<template>
  <el-submenu v-if="hasMoreChildren" :index="truePath(currentPath, item.path)">
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
    v-else-if="hasOneChild"
    :index="truePath(currentPath, item.children[0].path)"
    class="menu-item"
  >
    <i v-if="hasIcon(item.children[0].meta)" :class="item.children[0].meta.icon" :style="iconStyle" />
    <span>{{ item.children[0].name }}</span>
  </el-menu-item>
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
    hasMoreChildren() {
      return this.item.children && this.item.children.length > 1;
    },
    hasOneChild(){
      return this.item.children && this.item.children.length === 1;
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