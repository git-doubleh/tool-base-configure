/*
 * @Description:
 * @Date: 2021-08-17 17:14:03
 * @LastEditTime: 2021-12-27 10:22:34
 */
module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    /*
    0：不使用此规则
    1：使用规则警告但不报错
    2：应用规则并报错
    */
    /*风格相关配置*/
    // 行尾使用分号
    semi: [1, "always"],
    // 禁用对象和数组字面量中使用结尾逗号
    "comma-dangle": [2, "never"],
    // 禁用行尾空格
    "no-trailing-spaces": [2, { skipBlankLines: true }],
    // 换行缩进2个空格
    indent: [2, 2],
    // 要求数组元素前后无空格
    "array-bracket-spacing": [2, "never"],
    // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    "comma-style": [2, "last"],
    // 禁止在对象字面量的键和冒号之间存在空格,要求在对象字面量的冒号和值之间存在至少有一个空格
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
    "lines-around-comment": [
      1,
      {
        beforeBlockComment: true,
      },
    ],
    // 强制在关键字前后使用一致的空格
    "keyword-spacing": 2,
    // 限制一行代码的字符数量
    "max-len": [1, 200],
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [
      2,
      {
        max: 2,
      },
    ],
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": 2,
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 要求使用双引号
    quotes: [1, "double"],

    /* ESLint 官网推荐的最佳实践*/
    // 限制圈复杂度为 13
    complexity: [1, 13],
    // 当代码块只有一条语句时，JavaScript 不允许省略大括号
    curly: [2, "all"],
    // switch 语句要有 default 分支
    "default-case": 1,
    // 强制object.key 中 . 的位置，参数:
    // property，'.'号应与属性在同一行
    // object, '.' 号应与对象名在同一行
    "dot-location": [2, "property"],
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [1, "allow-null"],
    // 要求 for-in 循环中有一个 if 语句，避免原型链继承来的属性被使用
    "guard-for-in": 2,
    // 禁用 alert、confirm 和 prompt，避免生产环境时被使用
    "no-alert": 2,
    // 禁止 if 语句中有 return 之后有 else
    "no-else-return": 2,
    // 禁止出现空函数，但是空函数中如果有一行注释可以被通过
    "no-empty-function": 2,
    // 禁止使用空解构模式no-empty-pattern
    "no-empty-pattern": 2,
    // 禁止在全局范围内使用 var 和命名的 function 声明
    "no-implicit-globals": 1,
    // 禁止在循环中出现 function 声明和表达式
    "no-loop-func": 1,
    // 某一行中禁止使用多个空格
    "no-multi-spaces": 2,
    // 禁止多次声明同一变量
    "no-redeclare": 2,
    // 要求 IIFE 使用括号括起来
    "wrap-iife": [2, "any"],

    /*ES6语法相关*/
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 强制在箭头函数体周围使用大括号
    "arrow-body-style": 2,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    //禁止重复的函数声明
    "no-func-assign": 2,
    //不能有无法执行的代码
    "no-unreachable": 1,
    //禁止无用的表达式
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // 要求箭头函数的前后都要有空格
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
  },

  extends: ["plugin:vue/recommended", "eslint:recommended"]
};
