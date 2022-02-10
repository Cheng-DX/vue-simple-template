<template>

</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      list: []
    }
  },
  created() {
    // 构建一个随机二维数组  
    var arr = new Array(10);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(10);
      for (var j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random() * 100);
      }
    }

    this.list = arr;

    console.log(this.list[0])
  },
}
</script>
