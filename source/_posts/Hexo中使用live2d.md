---
title:  Hexo中使用live2d
date:  2022-03-30
categories:  Hexo
toc: true
tags:
-  live2d
---

Live2D是一种应用于电子游戏的绘图渲染技术，由日本Cybernoids公司开发，通过一系列的连续图像和人物建模来生成一种类似二维图像的三维模型;画师只需要绘制一张原画，然后将身体、五官、发型、服装等2D图片放到全3D的模型模板上。

<!--more-->

## 安装

[hexo-helper-live2d官方中文文档](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md) ; 安装 live2d 前确保已经搭建好hexo网站

```js
npm install --save hexo-helper-live2d
```



## 配置

根目录下的`_config.yml`添加live2d 配置

```yml
live2d:
  enable: true  # 是否启动
  scriptFrom: local # 默认
  pluginRootPath: live2dw/  # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/  # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/  # 模型文件相对与插件根目录路径
  tagMode: false  # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false  # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget  ## 模型文件
  display:
    position: right # 定位方向 left right top bottom
    width: 150  # 小人宽度
    height: 300 #  小人高度
    hOffset: -15  # 向👇偏移
    vOffset: -15  # 像👈偏移
  mobile:
    show: true  # 手机端是否显示
  react:
    opacity: 0.7  # 模型透明度

```

## 选择人物模型

1. **网络链接**

    ```yml
    model:
       use: https://imuncle.github.io/live2d/model/HyperdimensionNeptunia/vert_classic/index.json ## 模型文件
    ```

    

2. **本地文件**

    根目录下创建`live2d_models`文件夹 在此文件夹下新建模型文件夹例:`live2d-widget-model-koharu`

    ```yml
    model:
       use: live2d-widget-model-koharu
    ```

    使用npm 安装模型文件

    ```js
    npm install --save live2d-widget-model-koharu
    ```

    将`live2d-widget-model-koharu`文件夹复制到`live2d_models` 下即可

## 