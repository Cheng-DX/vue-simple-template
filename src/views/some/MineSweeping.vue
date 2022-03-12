<template>
  <div class="root">
    <div v-for="(subArray, rowIndex) in array" :key="index">
      <template v-for="(item, colIndex) in subArray">
        <button
          @click="onClick(rowIndex, colIndex)"
          :class="itemClass(item.show)"
          :key="item.id"
        >{{ item.value }}</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
    };
  },
  methods: {
    itemClass(show) {
      console.log(show)
      return show ? 'item' : 'item item-hidden';

    },
    onClick(row, col) {
      this.array[row][col].show = true;

    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.array.push([]);
      for (let j = 0; j < 10; j++) {
        this.array[i].push({
          mine: false,
          show: false,
          id: `${i}-${j}`,
        });
      }
    }
  },
};
</script>

<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  height: 60px;
  width: 60px;
  border: 1px solid rgb(221, 187, 187);
  text-align: center;
  background: #4987d8;
}
.item-hidden {
  background: #fff;
}
.item:hover {
  // background: #fff;
}
</style>