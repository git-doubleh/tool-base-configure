/*
 * @Description:
 * @Date: 2021-11-04 14:54:13
 * @LastEditTime: 2021-11-04 14:56:47
 */
// 防抖
function debounce(func, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, time);
  };
}
// 节流
function throtte(func, time) {
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if (current - activeTime > time) {
      func.apply(this, arguments);
      activeTime = Date.now();
    }
  };
}
