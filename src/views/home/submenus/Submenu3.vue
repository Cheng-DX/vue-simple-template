<template>
  <div class="root">
    <el-tag
      v-for="address in addressList"
      :key="address.id"
      class="address-tag"
    >
      {{ address.name }}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: [],
    };
  },
  created() {
    this.$axios.get("/address").then((res) => {
      this.addressList = res.data;
    });
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.address-tag.el-tag {
  margin: 5px;
  height: 40px;
  width: auto;
  text-align: center;
  font-size: 20px;
}
</style>