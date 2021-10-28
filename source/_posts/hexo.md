---
title: Hexo + github 搭建博客
date: 2021-10-28
categories: Hexo
keywords: hexo,github,免费,个人博客
tags:
- hexo
- github

---

>hexo中文官网 :https://hexo.io/zh-cn/

## 一、准备

1. github 账号
2. node 环境

## 二、搭建

1. 登录github账号访问 `https://github.com/new`创建一个新的仓库 ,Repository name : `你的用户名.github.io`

2. 安装 hexo `npm install -g hexo` ,分别执行下面两条命令.然后访问```localhost:4000```即可看到一个初始的hexo博客网站
   ```bash
   
      hexo init
      hexo s
   
   ```
3. 选择一个好看的hexo主题

   github 搜索 `hexo-theme` 选择一个好看的主题

   个人觉得 `https://github.com/blinkfox/hexo-theme-matery` 这个主题比较好看

4. 主题里都有安装文档,按照文档操作即可

   ​	执行 `hexo g`生成 静态页面

5. 将 `public`目录下的文件上传至 创建好仓库的根目录访问 `你的用户名.github.io ` 就大功告成了

## 三、撰写
   在目录 source/_posts 下新建一个 .md 文件
```markdown
---
title: Hexo + github 搭建博客 // 文章标题
date: 2021-10-28            // 发布日期
categories: Hexo            // 分类
keywords: hexo,github,免费,个人博客   // 文章关键词 利于 seo
tags:                               // 文章标签
- hexo
- github

---
// 正文内容 就跟普通 markdown 写法一样啦
> hexo中文官网 :https://hexo.io/zh-cn/

# 准备

1. github 账号
2. node 环境

# 开始搭建

1. 登录github账号访问 `https://github.com/new`创建一个新的仓库 ,Repository name : `你的用户名.github.io`

```
   

