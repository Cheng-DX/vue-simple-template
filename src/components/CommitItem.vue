<template>
  <div class="root-commit-item">
    <img :src="avatar" class="avatar" />
    <div class="detail">
      <div class="username">
        <span>{{ username }}</span>
      </div>
      <div class="content">
        <span>{{ content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommitItem",
  props: {
    content: String,
    time: String,
    avatar: String,
    username: String,
  },
}
</script>

<style scoped>
.root-commit-item {
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #00000036;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-right: 5px;
  
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.username {
  font-weight: bold;
  color: #000000;
}
</style>