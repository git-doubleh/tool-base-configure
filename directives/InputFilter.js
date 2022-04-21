/*
 * @Description: input 过滤 指令
 * @Date: 2021-11-24 15:38:21
 * @LastEditTime: 2022-04-21 15:38:15
 */
// 同步修改v-model
const dispatchEvent = function (el) {
  el.dispatchEvent(new Event("input"));
};

// 只能输入整数
const intFilter = function (el, value) {
  let target = el.value.replace(/\D/g, "");
  // value有值，代表需要比较大小
  if (value) {
    if (!el.value || el.value < value[0]) {
      target = value[0];
    } else if (el.value > value[1]) {
      target = value[1];
    }
  }
  return target;
};
// 只能输入整数小数
const priceFilter = function (el) {
  let target = el.value.replace(/[^\d.]*/g, "");
  if (isNaN(target)) {
    target = "";
  }
  return target;
};
// 只能输入常规字符
const specialFilter = function (el) {
  return el.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g, "");
};
// 只能输入数字字母特殊字符
const validCode = function (el) {
  return el.value.replace(/[\u4E00-\u9FA5]/g, "");
};

export default {
  bind(el, binding, vnode) {
    if (el.tagName.toLowerCase() !== "input") {
      el = el.getElementsByTagName("input")[0];
    }
    el.addEventListener("compositionstart", () => {
      vnode.inputLocking = true;
    });
    el.addEventListener("compositionend", () => {
      vnode.inputLocking = false;
      dispatchEvent(el);
    });

    el.addEventListener("input", () => {
      if (vnode.inputLocking) {
        return;
      }
      let oldValue = el.value;
      let newValue = "";
      switch (binding.arg) {
      case "int":
        newValue = intFilter(el, binding.value);
        break;
      case "price":
        newValue = priceFilter(el, vnode);
        break;
      case "special":
        newValue = specialFilter(el, vnode);
        break;
      case "code":
        newValue = validCode(el, vnode);
        break;
      default:
        break;
      }

      // 判断是否需要更行 避免进入死循环 过滤后若不一样 则需要手动更新v-model
      if (newValue !== oldValue) {
        el.value = newValue;
        dispatchEvent(el);
      }
    });


  }
};
