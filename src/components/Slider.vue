<template>
  <el-menu
    :default-active="this.$route.path"
    router
    :collapse="menuCollapse"
    min-width="200px"
    class="my-menu"
  >
    <template v-for="(item, index) in slider">
      <slider-item v-if="show(item)" :item="item" :key="index"/>
    </template>
  </el-menu>
</template>

<script>
import SliderItem from "./SliderItem.vue";
export default {
  components: {
    SliderItem,
  },
  props: {
    menuCollapse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slider() {
      return this.$router.options.routes;
    },
  },
  methods: {
    show(item) {
      if (item.meta === undefined || item.meta.notLoad === undefined) {
        return true;
      }
      return !item.meta.notLoad;
    },
  },
};
</script>
