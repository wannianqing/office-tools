# office-tool
PDF 文件在线预览组件，支持自定义顶部操作栏，支持自定义左侧缩略图栏，支持点击缩略图定位功能

# 功能介绍
- 易用，美观、支持深度定制的 office 办公工具组件库
- 使用简单：只需提供文档 url 地址，即可在线预览文档
- 强交互：支持深度配置交互栏(顶部缩放、左侧缩略栏)

# 功能演示
前往<a href="https://wannianqing.github.io/office-tools/dist/index.html" target="blank">《演示地址》</a>



![图片](https://wannianqing.github.io/office-tools/images/pdf-preview.png)



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



# 计划

- [x] 实现PDF文件的基础预览功能
- [x] 实现PDF文件的缩放功能
- [x] 实现PDF文件的缩略目录功能
- [ ] 实现在线预览excel基础功能
- [ ] 实现在线预览doc文档功能 
- [ ] 实现PDF在线签名功能


# 踊跃star，使用bug请提issue
