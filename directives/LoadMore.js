/*
 * @Description: 表格滚动分页
 * @Date: 2021-12-07 09:18:50
 * @LastEditTime: 2021-12-07 09:20:32
 */
export default {
  bind(el, binding) {
    const selectWrap = el.querySelector(".el-table__body-wrapper");
    selectWrap.addEventListener("scroll", function () {
      let sign = 50;
      const scrollDistance =
				this.scrollHeight - this.scrollTop - this.clientHeight;
      if (scrollDistance <= sign) {
        binding.value();
      }
    });
  }
};
