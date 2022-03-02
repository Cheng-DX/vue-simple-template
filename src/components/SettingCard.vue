<template>
  <div class="setting-card">
    <div class="title">
      <i class="el-icon-setting icon"></i>
      <span>{{ title }}</span>
    </div>
    <div class="other">
      <slot v-if="slotVisible"></slot>
      <template v-else>
        <el-switch
          v-if="switchVisible"
          v-model="switchModel"
          @change="switchChange"
          :active-color="activeColor"
          style="margin-left: 30px"
        />
        <el-select
          v-else-if="selectorVisible"
          v-model="selectorModel"
          @change="selectorChange"
          placeholder="请选择"
          class="selector"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          />
        </el-select>
        <span v-else>SOMETHING WRONG</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting-card",
  props: {
    title: {
      type: String,
      required: true,
    },
    commitEvent: {
      type: Function,
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: "none",
      validator: function (type) {
        return ['switch', 'selector', 'none'].indexOf(type) !== -1;
      }
    },
    switchModel: {
      type: [Boolean, String],
      required: false,
      default: null,
    },
    switchChange: {
      type: Function,
      required: false,
      default: null,
    },
    selectorChange: {
      type: Function,
      required: false,
      default: null,
    },
    activeColor: {
      type: String,
      required: false,
      default: "#409EFF",
    },
    selectorModel: {
      type: String,
      required: false,
      default: null,
    },
    options: {
      type: Array,
      required: false,
      default: null,
    },
  },
  computed: {
    commitButtonVisible() {
      return this.commitEvent !== null;
    },
    slotVisible() {
      return this.type === 'none';
    },
    switchVisible() {
      return this.type === 'switch' && this.switchModel !== null && this.changeEvent !== null;
    },
    selectorVisible() {
      return this.type === 'selector' && this.selectorModel !== null && this.options !== null;
    },
    colorPickerVisible() {
      return this.type === 'color-picker';
    },
  },
};
</script>

<style scoped>
.setting-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: transparent;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  box-shadow: 0px 0px 2px #c0b8b849;
}
.setting-card:hover {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  transition: 2s;
}
.icon {
  margin-right: 10px;
}
.title {
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 10px;
  height: 20%;
}
.commit-button {
  width: 100%;
  margin-top: 20px;
}
.other {
  height: 80%;
}
.selector {
  width: 100%;
}
</style>