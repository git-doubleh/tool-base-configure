
## 编码规范

### 1.Vue组件

- 在提交的代码中，prop 的定义应该尽量详细，至少指定其类型。并优先 prop 和事件（`$emit`）进行父子组件之间的通信，而不是通过 `this.$parent` 或对 prop 做出变更。
 
- 文件命名规范：
   - 每一个 Vue 单文件都需要创建对应的文件夹包裹，例如 `MyComponent.vue`文件需要包含在`MyComponent`文件夹下面；
   - 模块的文件名命名格式为大驼峰，例如 `MyComponent/MyComponent.vue`；
   - 模板中引用统一使用横线连接。组件名称应该以高阶的 (通常是一般化描述的) 单词开头，并以描述性的修饰词结尾。例如：`<search-button-clear></search-button-clear>`
		
### 2.Vue实例选项顺序
- name
- components、directives
- extends、mixins、provide/inject
- props、inheritAttrs
- data、computed
- watch
- 生命周期事件
- methods
### 3.HTML & CSS
- html尽量减少层级嵌套，css书写按照定位样式、盒模型样式、其他顺序。
  - 位置属性(position, top, right, z-index, display, float等)
  - 大小(width, height, padding, margin)
  - 文字系列(font, line-height, letter-spacing, color- text-align等)
  - 背景(background, border等)
  - 其他(animation, transition等) 
  

- class命令始终使用横线连接并且为全小写。
  
### 4. 通用文件
- src/api
- src/assets
- src/directives
- src/icons
- src/utils
