<template>
  <div class="root">
    <div class="size-bar" v-if="style === 'CLASSIC'">
      <el-slider v-model="size" :min="min" :max="max" :step="1" />
    </div>
    <div v-for="(subArray, rowIndex) in array" :key="rowIndex" class="line">
      <template>
        <button
          v-for="(item, colIndex) in subArray"
          @click="onClick(rowIndex, colIndex)"
          @click.right.prevent="flag(rowIndex, colIndex)"
          :class="itemClass(item.show)"
          :style="{
            height: `${600 / size}px`,
            width: `${600 / size}px`,
          }"
          :key="item.id"
        >{{ itemValue(item) }}</button>
      </template>
    </div>
    <div class="button-group">
      <el-button @click="changeStyle" type="primary">{{ style }}</el-button>
      <!-- <el-button @click="changeMode" :type="mode === 'DEV' ? 'primary' : 'success'">{{ mode }}</el-button> -->
      <el-button @click="reset" type="danger">RESET</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
      mode: 'PLAY',
      status: 'playing',
      size: 10,
      style: 'CLASSIC',
      min: 3,
      max: 20,
      difficultyDegree: 0.1
    };
  },
  watch: {
    status() {
      this.$message({
        message: this.status === 'won' ? 'YOU WIN!' : 'BOOM!',
        type: this.status === 'won' ? 'success' : 'error'
      })
    },
    size() {
      this.reset()
    }
  },
  methods: {
    changeStyle() {
      this.style = this.style === 'CLASSIC' ? 'PASS MODE' : 'CLASSIC'
      if (this.style === 'PASS MODE') {
        this.size = this.min
      }
    },
    itemValue(item) {
      if (this.mode === 'DEV') {
        return item.mine ? 'X' : item.value
      }
      if (item.flag) {
        return 'F'
      } else if (!item.show) {
        return ''
      } else if (item.mine) {
        return 'mine'
      } else {
        return item.value
      }
    },
    reset() {
      this.status = 'playing'
      this.mode = 'PLAY'
      this.init()
    },
    changeMode() {
      this.mode = this.mode === 'DEV' ? 'PLAY' : 'DEV'
    },
    itemClass(show) {
      return show ? 'item' : 'item item-hidden';
    },
    onClick(row, col) {
      if (this.status !== 'failed') {
        if (this.array[row][col].mine) {
          this.status = 'failed'
          if (this.style === 'PASS MODE') {
            this.$message.error('PASS MODE FAILED')
            this.style = 'CLASSIC'
          }
          return
        }
        this.array[row][col].show = true;
        for (let i = row - 1; i <= row + 1; i++) {
          for (let j = col - 1; j <= col + 1; j++) {
            if (i < 0 || i >= this.size || j < 0 || j >= this.size || this.array[i][j].show || this.array[i][j].mine) {
              continue
            }
            if (this.array[i][j].value === '') {
              this.onClick(i, j)
            } else {
              this.array[i][j].show = true
            }
          }
        }
        this.array[row][col].show = true;
      }
    },
    isOver() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (this.array[i][j].mine && !this.array[i][j].flag) {
            return false
          }
        }
      }
      return true
    },
    flag(row, col) {
      this.array[row][col].flag = true
      if (this.isOver(row, col)) {
        this.status = 'won'
        if (this.style === 'PASS MODE') {
          this.$message.success(`${this.size}x${this.size} PASS MODE WIN!`)
          if (this.size !== this.max) {
            this.size++
            this.init()
          } else {
            this.$message.success('PASS MODE WIN!')
          }
        }
      }
    },
    init() {
      let array = []
      let hasMine = false
      for (let i = 0; i < this.size; i++) {
        array.push([]);
        for (let j = 0; j < this.size; j++) {
          let mine = Math.random() < this.difficultyDegree
          if (mine && !hasMine) {
            hasMine = true
          }
          array[i].push({
            mine,
            show: false,
            flag: false,
            id: `${i}-${j}`,
          });
        }
      }
      if (!hasMine) {
        array[0][0].mine = true
      }
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (array[i][j].mine) {
            continue;
          }
          let count = 0;
          for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
              if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
                continue;
              }
              if (array[x][y].mine) {
                count++;
              }
            }
          }
          array[i][j].value = (count === 0 ? '' : count);
        }
      }
      this.array = array;
    }
  },
  created() {
    this.init()
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
.size-bar {
  width: 50%;
}
.line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.item {
  border: 1px solid rgb(221, 187, 187);
  text-align: center;
  margin: 1px;
  font-weight: 700;
}
.item-hidden {
  background: #fff;
}
.item:hover {
  // background: #fff;
}
.button-group {
  margin-top: 30px;
}
</style>