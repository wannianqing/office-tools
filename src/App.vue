<template>
  <div class="header">
    <p class="upload-btn">
      <span>上传本地PDF</span>
      <input type="file" @change="handleChange" />
    </p>

    <div class="remote">
      <p>远程地址：</p>
      <div class="input-box">
        <input type="text" :value="pdfUrl" @input="handleInput" />
      </div>
      <button @click="submit">预览</button>
    </div>
  </div>
  <div class="pdf-wrapper">
    <office-pdf :data="pdfUrl"></office-pdf>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 生命PDF url 地址
const pdfUrl = ref("https://wannianqing.github.io/office-tools/dist/Koa%E5%9F%BA%E7%A1%80%E6%8B%9B%E5%BC%8F.pdf");

// 上传本地PDF文件
const handleChange = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  pdfUrl.value = url;
};

const inputValue = ref("https://wannianqing.github.io/office-tools/dist/Koa%E5%9F%BA%E7%A1%80%E6%8B%9B%E5%BC%8F.pdf");

const handleInput = (event) => {
  inputValue.value = event.target.value;
};

const submit = () => {
  pdfUrl.value = inputValue.value;
};
</script>

<style>
.header {
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.pdf-wrapper {
  height: calc(100% - 56px);
}
.header {
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.upload-btn {
  padding: 10px 15px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  position: relative;
  background-color: #40a9ff;
}
.upload-btn input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  opacity: 0;
}

.remote {
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.remote button {
  width: 80px;
  height: 32px;
  color: #fff;
  background: #40a9ff;
  border-radius: 4px;
  cursor: pointer;
}
.input-box {
  height: 34px;
  width: 300px;
  padding: 0 6px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  position: relative;
}
.input-box input {
  width: 100%;
  height: 30px;
}
.input-box:has(input:focus) {
  border-color: #40a9ff;
}
</style>
