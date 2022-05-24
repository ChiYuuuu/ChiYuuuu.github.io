---
title:  常用Laravel-Artisan命令
date:  2022-01-12
categories:  Laravel
keywords:  artisan
toc: true
tags:
-  artisan
---

Artisan是Laravel中自带的命令行工具的名称，它提供了一些对应用开发有帮助的命令；artisan是由强大的Symfony Console组件驱动的，开发者可以使用list命令查看所有可用的Artisan命令。<!--more -->

## 一、数据迁移

1. 创建迁移文件

   `php artisan make:migration create_users_table`

2. 执行迁移

   `php artisan migrate`
<!--more -->
## 二、控制器

1. 指定目录下创建控制器

   `php artisan make:controller FileName/IndexController`

2. 创建 Rest 风格资源控制器（带有 index、create、store、edit、update、destroy、show 方法）末尾追加 --resource

   `php artisan make:controller IndexController --resource`

## 三、模型

1. 指定目录下创建模型

   ` php artisan make:model FileName/ModelName`

2. 一并创建迁移文件，末尾追加 -m

   ` php artisan make:model FileName/ModelName -m`
