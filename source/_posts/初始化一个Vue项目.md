---
title: 初始化一个Vue项目
date:  2022-04-15
categories:  Vue
toc: true
tags:
-  vue
---

## 文档

[Vue文档](https://staging-cn.vuejs.org/guide/introduction.html)

## 安装

```sh
npm init vue@latest
```

<!--more-->

## 全局环境变量

根目录下新建 **env** 文件

```sh
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载 
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

````sh
.env.production 	#生产模式
.env.development 	#开发模式
````

`import.meta.env.VITE_TITLE` 获取环境变量

只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码

### 重置全局样式

```sh
npm install  normalize.css
```

main.js引入 `import 'normalize.css/normalize.css'`

