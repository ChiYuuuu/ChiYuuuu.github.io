---
title:  js中常用的库
date:  2022-03-11
categories:  js
keywords:  js,工具库
toc: true
tags:
-  工具
-  js
---



### JavaScript 日期处理类库

**Moment.js** 	http://momentjs.cn/

<!--more-->

```js
npm install moment

import moment from 'moment'

moment().format('YYYY-MM-DD');// 2022-03-11
moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
```



### JavaScript 表单数据验证

**validator.js** 	https://github.com/validatorjs/validator.js

```js
npm install validator

import validator from 'validator';

validator.isEmail('foo@bar.com'); //=> true
```

