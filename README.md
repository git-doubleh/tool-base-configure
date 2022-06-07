* ### **通用规范** ###
  + 缩进使用统一即可，不要Tab、空格混搭
  + 书写注释习惯
  + 调式信息 `console.log、debbuger`使用完及时删除


* ### **命名规范** ###
  + ##### 项目命名
    >采用小写方式，以中线分隔
    ``` web-abs ```
  + ##### 目录命名
    >全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数
    ``` /user/abs/apply-list ```
  + ##### 文件命名
    > JS、CSS、SCSS、HTML、PNG命名，全部采用小写方式， 以中划线分隔。
    ``` @/assets/img/logo-white.png ```


* ### **HTML规范** ###
    + 属性值必须用双引号"", 避免使用中文拼音，尽量简易并要求语义化
    + 可能减少```<DIV>```嵌套。过多嵌套（4,5层足够）：会影响网页加载速度，不利于SEO
    + 尽量减少```style```属性，使用```class```定义新的样式
    + HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标签。
    + 一个标签内有多个属性，属性分行写

* ### **CSS规范** ###
    + 规避class与id命名
      > ```class```使用小写，中线分隔，
      > ```id``` 使用驼峰
      > ``` <div id="mainContent" class="main-content"></div> ```
    + 提高```css```的重复利用率，提取公用样式
    + 尽量避免使用子选择器
        > ul > li > a > .text
    + 使用```scoped```关键词约束范围
    + 可以省略0后面的单位
    + css书写按照定位样式、盒模型样式、其他顺序。
        > 位置属性(position, top, right, z-index, display, float等)
        > 大小(width, height, padding, margin)
        文字系列(font, line-height, letter-spacing, color- text-align等)
        背景(background, border等)
        其他(animation, transition等)


* ### **JS规范** ###
  + 方法名、参数名、变量名全部使用小驼峰命名风格
  + 命名尽量语义化：动词+名词
    >   get 获取/set 设置,
        add 增加/remove 删除,
        open 打开/close 关闭,
        view 查看/browse 浏览,
        edit 编辑/modify 修改,
        clean 清理/clear 清除,
        index 索引/sort 排序,
        find 查找/search 搜索,
        send 发送/receive 接收,
        download 下载/upload 上传,
        refresh 刷新/synchronize 同步,
        submit 提交/commit 交付, save 保存，
        enter 进入/exit 退出
  + 常亮命名全部使用大写，单词间用下划线分隔
  + 使用模板字符串取代连接字符串
  + 回调函数统一使用 Promise 函数；回调成功的参数统一为 res，错误参数为 err。
  + 优先使用ES6+中新增的语法糖和函数
  + if关键字后必须有大括号（即使代码块的内容只有一行）。



* ### **Vue** ###
  + ##### 组件名 ######
    > 使用Pascal（大驼峰）命名，首字母大写
    ```
    例： export default { name: PageHeader }
    ```
  + ###### Props ######
    > 定义时始终使用驼峰命名，在父组件赋值时使用连接线(-)。并且尽量详细指定其类型、默认值
    ```
        // Vue
        props: {
            showStatus: Boolean,
            default: true
        }
        // HTML
        <span :show-status="true"></span>
    ```
  + ##### 单文件JS书写顺序 #####
    ```
        export default {
            name: '',
            mixins: [], // 混入
            components: {}, // 组件
            props: {},
            data() {
                returnt {}
            },
            computed: {}, // 计算属性
            watch: {},
            created() {},
            mounted() {},
            methods: {},
            filters: {}, // 过滤器
            directives: {}, // 指令
            destoryed() {}
        }
    ```
  + ##### 开发规范 #####
    ```
        1. 为v-for设置Key值
        2. 使用计算属性 规避v-if和v-for用在一起
        3. 使用ES6风格编码源码
        4. 尽量使用===
        5. 应该把复杂计算属性分割为尽可能多的更简单的属性。
        6. 路由地址尽量与文件路径一致。
        7. 导入模块时不要省略后缀（js 除外），这样有利于 IDE 感知（特别是 .vue）
        8. 路由使用懒加载。
    ```