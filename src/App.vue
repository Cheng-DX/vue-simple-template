<template>
  <div :class="theme">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #e6d6d68f;
  border-radius: 3px;
}
@import url('../node_modules/element-ui/lib/theme-chalk/index.css');
$base: #ebdfdf;
$back: transparent;
$--color-primary: #5d86d8 !default;

.light {
}
.transparent {
  background: url("./assets/test1.jpg") no-repeat;
  background-size: 100vw 100vh;
  p,
  label,
  i,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  th,
  td,
  strong {
    color: $base;
  }
  .el-button {
    background: $back;
  }
  .el-card {
    background: $back;
  }
  .el-select {
    background: $back;
    .el-select-dropdown {
      background: $back;
    }
  }

  .el-transfer {
    background: $back;
    .el-transfer-panel {
      background: $back;
    }
    .el-transfer-panel__header {
      background: $back;
      .el-checkbox__label {
        color: $base;
      }
    }
    .el-transfer-panel__body {
      background: $back;
    }
  }
  .el-breadcrumb {
    .el-breadcrumb__inner {
      color: $base;
    }
  }
  .el-tag {
    background: $back;
  }

  .el-input {
    background: $back;
    .el-input__inner {
      background: $back;
      color: $base;
    }
    .el-input-group__append {
      background: $back;
    }
    .el-input-group__prepend {
      background: $back;
    }
  }
  .el-textarea {
    background: $back;
    font-family: element-icons;
    .el-textarea__inner {
      background: $back;
      color: $base;
    }
  }
  .el-radio {
    .el-radio__inner {
      background: $back;
    }
  }

  .el-radio-group {
    .el-radio-button__inner {
      background: $back;
    }
    .is-active {
      .el-radio-button__inner {
        color: $--color-primary;
      }
    }
    .is-disabled {
      .el-radio-button__inner {
        background: $back;
      }
    }
  }
  .el-checkbox {
    .el-checkbox__label {
      color: $base;
    }
    .el-checkbox__inner {
      background: $back;
      color: $base;
    }
  }
  .el-checkbox-group {
    .el-checkbox-button__inner {
      background: $back;
    }
    .is-checked {
      .el-checkbox-button__inner {
        color: $--color-primary;
      }
    }
    .is-disabled {
      .el-checkbox-button__inner {
        background: $back;
      }
    }
  }

  .el-checkbox {
    .el-checkbox__inner {
      background: $back;
    }
  }

  .el-date-editor {
    background: $back;

    .el-range-input {
      background: $back;
      color: $base;
    }
    .el-range-separator {
      color: $base;
    }
  }

  .el-switch {
    .el-switch__core {
      background: transparent;
    }
  }
  .el-descriptions {
    .el-descriptions__header {
      color: $base;
    }
    .el-descriptions__body {
      background: $back;
    }
    .el-descriptions-item__label {
      background: $back;
    }
  }
  .el-alert {
    background: $back;
    .el-alert__icon {
      color: #ffffff75;
    }
  }

  .el-tabs--border-card {
    background: $back;
    color: $base;
    .el-tabs__header {
      background: $back;
      .el-tabs__item {
        background: $back;
      }
    }
    .is-active {
      .el-tabs__item {
        color: $--color-primary;
      }
    }
  }
}
.dark {
  $base: #ebdfdf;
  $back: transparent;
  background: #232525;
  background-size: 100vw 100vh;
  p,
  label,
  i,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  th,
  td,
  strong {
    color: $base;
  }
  .el-button {
    background: $back;
  }
  .el-card {
    background: $back;
  }
  .el-select {
    background: $back;
    .el-select-dropdown {
      background: $back;
    }
  }

  .el-transfer {
    background: $back;
    .el-transfer-panel {
      background: $back;
    }
    .el-transfer-panel__header {
      background: $back;
      .el-checkbox__label {
        color: $base;
      }
    }
    .el-transfer-panel__body {
      background: $back;
    }
  }
  .el-breadcrumb {
    .el-breadcrumb__inner {
      color: $base;
    }
  }
  .el-tag {
    background: $back;
  }

  .el-input {
    background: $back;
    .el-input__inner {
      background: $back;
      color: $base;
    }
    .el-input-group__append {
      background: $back;
    }
    .el-input-group__prepend {
      background: $back;
    }
  }
  .el-textarea {
    background: $back;
    font-family: element-icons;
    .el-textarea__inner {
      background: $back;
      color: $base;
    }
  }
  .el-radio {
    .el-radio__inner {
      background: $back;
    }
  }

  .el-radio-group {
    .el-radio-button__inner {
      background: $back;
    }
    .is-active {
      .el-radio-button__inner {
        color: $--color-primary;
      }
    }
    .is-disabled {
      .el-radio-button__inner {
        background: $back;
      }
    }
  }
  .el-checkbox {
    .el-checkbox__label {
      color: $base;
    }
    .el-checkbox__inner {
      background: $back;
      color: $base;
    }
  }
  .el-checkbox-group {
    .el-checkbox-button__inner {
      background: $back;
    }
    .is-checked {
      .el-checkbox-button__inner {
        color: $--color-primary;
      }
    }
    .is-disabled {
      .el-checkbox-button__inner {
        background: $back;
      }
    }
  }

  .el-checkbox {
    .el-checkbox__inner {
      background: $back;
    }
  }

  .el-date-editor {
    background: $back;

    .el-range-input {
      background: $back;
      color: $base;
    }
    .el-range-separator {
      color: $base;
    }
  }

  .el-switch {
    .el-switch__core {
      background: transparent;
    }
  }
  .el-descriptions {
    .el-descriptions__header {
      color: $base;
    }
    .el-descriptions__body {
      background: $back;
    }
    .el-descriptions-item__label {
      background: $back;
    }
  }
  .el-alert {
    background: $back;
    .el-alert__icon {
      color: #ffffff75;
    }
  }

  .el-tabs--border-card {
    background: $back;
    color: $base;
    .el-tabs__header {
      background: $back;
      .el-tabs__item {
        background: $back;
      }
    }
    .is-active {
      .el-tabs__item {
        color: $--color-primary;
      }
    }
  }
}
</style>
