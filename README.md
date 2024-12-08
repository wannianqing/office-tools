# office-tool
PDF 文件在线预览组件，支持自定义顶部操作栏，支持自定义左侧缩略图栏，支持点击缩略图定位功能

# 功能介绍
- 易用，美观、支持深度定制的 office 办公工具组件库
- 使用简单：只需提供文档 url 地址，即可在线预览文档
- 强交互：支持深度配置交互栏(顶部缩放、左侧缩略栏)

# 安装
```
# 一键式安装
npm install office-tool

# yarn 命令
yarn add office-tool
```

# 使用示例
```
// 全局导入  main.ts
import OfficeTool from "office-tool";
import "office-tool/dist/index.css";

// 组件使用
<template>
  <office-pdf
    :data="pdfUrl"
    :toolbar="true"
    :thumbnail="true"
  ></office-pdf>
</template>
```
