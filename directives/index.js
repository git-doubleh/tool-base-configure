/*
 * @Description: 指令
 * @Date: 2021-11-24 15:10:18
 * @LastEditTime: 2021-12-07 09:19:48
 */
import InputFilter from "./InputFilter";
import LoadMore from "./LoadMore";
import drag from "./drag";


const directives = {
  InputFilter,
  LoadMore,
  drag
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  }
};
