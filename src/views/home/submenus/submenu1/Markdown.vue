<template>
  <div class="root">
    <textarea v-model="src" type="textarea" class="textarea" />
    <div class="result">
      <vue-markdown :source="src"></vue-markdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: `## Markdown
### Subtitle :) :(
#### Sub-subtitle`,
    };
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  width: 98%;
}
.textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  font-family: "element-icons";
}
.textarea:focus {
  outline: none;
}
.result {
  width: 100%;
  margin-top: 20px;
  border: 1px solid;
  border-color: lightgrey;
  border-radius: 5px;
  padding: 10px;
}
</style>