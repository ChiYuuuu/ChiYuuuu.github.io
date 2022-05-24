---
title:  小程序request封装
date:  2022-03-29
categories:  小程序
keywords: request,文件上传
toc: true
tags:
-  小程序
-  request

---



## 官方文档

[wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

[wx.uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)



<!--more-->

## 创建request.js

`/utils` 文件夹下新建`request.js`

示例代码:

```js
const config = {
  timeout: 60000
}

const request = (options) => {
  return new Promise((resolve, reject) => {

    wx.request({
      url: options.url,
      data: options.data,
      timeout: config.timeout,
      method: options.method,
      header: {
        Token: ''
      },
      success: (res) => {
        let data = res.data
        if (data.code == '0') {
          resolve(data)
        } else {
          handleSuccess(data)
          // reject(data)
        }
      },
      fail: (err) => {
        wx.showToast({
          title: err.errMsg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  })
}
/**
 * 处理成功回调
 */
function handleSuccess(data) {
    // 未登录或登录过期
    if(data.code=='1'){

    }
}
// export function uploadFiles(filePath,token){   
//   return new Promise((resolve, reject) => {
//     wx.uploadFile({
//       url:`${URL_PREV}upload`,
//       filePath:filePath,
//       name: 'file',
//       header:{
//         'content-type':'multipart/form-data',
//         'x-token':token
//       },
//       success: function(res){
//         let data = JSON.parse(res.data);
//         if (data.code==200) {
//           resolve(data.link);
//         }else {
//           reject(data.message);
//         }
//       }
//     })
//   }).catch(function(e){
//     wx.showToast({
//        title: e,
//        icon: 'none',
//        duration: 1500
//     })
//   });
// };

export default request
```

