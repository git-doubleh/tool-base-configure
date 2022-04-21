/*
 * @Description:
 * @Date: 2021-11-04 14:54:13
 * @LastEditTime: 2021-11-04 14:56:47
 */
// 防抖
export function debounce(func, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, time);
  };
}
// 节流
export function throtte(func, time) {
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if (current - activeTime > time) {
      func.apply(this, arguments);
      activeTime = Date.now();
    }
  };
}


/**
 * @description: 截取路由参数
 * @param {*} name
 */
export function getQueryString() {
  let href = decodeURIComponent(window.location.href);
  let query = href.substring(href.indexOf("?") + 1);
  let vars = query.split("&");
  let obj = {};
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    obj[pair[0]] = pair[1];
  }
  return obj;
}
/**
 * @description: 下载文件
 * @param {*}
 */
export function downloadFile(response, name) {
  const disposition = response.headers["content-disposition"];
  let fileName = "" || name + '' + GMTToStr(Date.now(), false);
  if (disposition) {
    fileName = disposition.substring(
      disposition.indexOf("filename=") + 9,
      disposition.length
    );
    fileName = decodeURI(escape(fileName));
    // 去掉双引号
    fileName = fileName.replace(/\"/g, "");
  }
  const content = response.data;
  // 创建a标签并点击， 即触发下载
  let url = window.URL.createObjectURL(
    new Blob([content], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
    })
  );
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", fileName);
  // 模拟
  document.body.appendChild(link);
  link.click();
  // 释放URL 对象
  window.URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
} 
