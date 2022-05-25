---
title:  vue中使用fullcalendar
date:  2022-02-24
categories:  demo
keywords:  fullcalendar,vue
toc: true
tags:
- vue
- fullcalendar

---
在vue中实现日历功能,并显示节气,节日.自定义点击事件,浮动弹窗
DEMO地址: https://github.com/ChiYuuuu/vue-fullcalendar-demo
<!--more-->
## 一、安装

默认安装的插件

- 月视图 `@fullcalendar/daygrid`
- 互动插件 `@fullcalendar/interaction`

```js
// vue2
npm install --save @fullcalendar/vue @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
// vue3
npm install --save @fullcalendar/vue3 @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
```

## 二、使用
### 显示农历、节气、节日等

使用 lunar 库 https://github.com/6tail/lunar-javascript


 `npm install lunar-javascript`

```js
import {Lunar, Solar} from 'lunar-javascript'
// Lunar 阴历 Solar 阳历
```

### 样式修改

```css
/*添加日期单元格hover样式*/
.fc .fc-daygrid-day-frame:hover {
  background: #f0f8ff;
}
```



