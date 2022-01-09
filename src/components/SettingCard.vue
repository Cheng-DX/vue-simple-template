<template>
  <div class="setting-card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="other">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.setting-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.setting-card:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: 2s
}
.title {
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 10px;
  height: 20%;
}
.other{
  height: 80%;
}
</style>