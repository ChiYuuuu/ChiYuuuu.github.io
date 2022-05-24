---
title:  php&js代码中的命名规范
date:  2021-12-18
categories:  命名
keywords:  命名规范
toc: true
tags:
-  规范
---

### 一、文件&目录命名

- 全部小写，下划线 `_` 分隔。例：`styles` 、`data_models`<!--more-->



### 二、变量命名
- 一般采用 lowerCamelCase 风格
- 代码中的命名均不能以 `_` 或 `$` 开始，也不能以 `_` 或 `$` 结束

#### 常量命名

- 全部大写，例：`MAX_STOCK_COUNT` 、` CACHE_EXPIRED_TIME`
  

### 三、函数命名

- 一般采用 lowerCamelCase 风格 
- 动词(do) + 名词(something)，例：`addTableEntry()` 、`deleteUrl()` 

| 类别                          | 单词                                           |
| ----------------------------- | ---------------------------------------------- |
| 添加/插入/创建/初始化/加载    | add、append、insert、create、initialize、load  |
| 删除/销毁                     | delete、remove、destroy                  |
| 打开/开始/启动                | open、start                                    |
| 关闭/停止                     | close、stop                                    |
| 获取/读取/查找/查询           | get、fetch、acquire、read、search、find、query |
| 设置/重置/放入/写入/释放/刷新 | set、reset、put、write、release、refresh       |
| 发送/推送                     | send、push                                     |
| 接收/拉取                     | receive、pull                                  |
| 提交/撤销/取消                | submit、cancel                                 |
| 收集/采集/选取/选择           | collect、pick、select                          |
| 提取/解析                     | sub、extract、parse                            |
| 编码/解码                     | encode、decode                                 |
| 填充/打包/压缩                | fill、pack、compress                           |
| 清空/拆包/解压                | flush、clear、unpack、decompress               |
| 增加/减少                     | increase、decrease、reduce                     |
| 分隔/拼接                     | split、join、concat                            |
| 过滤/校验/检测                | filter、valid、check                           |
