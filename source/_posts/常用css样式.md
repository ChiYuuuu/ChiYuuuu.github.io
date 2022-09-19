---
title:  常用css样式
date:  2022-09-19
categories:  CSS
toc: true
tags:
-  css
-  常用

---









### 1.网站快速变灰

```css
html {
   filter: grayscale(100%);//IE浏览器
  -webkit-filter: grayscale(100%);//谷歌浏览器
  -moz-filter: grayscale(100%);//火狐
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(1);//谷歌浏览器
}
```



### 2. 限制单行文本超出显示省略号

```css
div{
    width: 65px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 
}

```

