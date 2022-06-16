### vscode插件
 + Atom One Dark Theme
 + Auto Close Tag
 + Auto Rename Tag
 + css-auto-prefix
 + EsLint
 + GitLens
 + Hightlight Matching
 + Image preview
 + koroFileHeader
 + Markdow Preview Enhanced
 + Material Icon Theme
 + One Dark Pro
 + Volar (vue3)

### 配置文件
---
#### vscode settings.json
  ```
    "editor.formatOnSave": false,"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true},"eslint.validate": ["javascript",
    "javascriptreact",
    "vue-html",]
  ```
### .editorconfig
> 统一不同ide编码风格，针对缩进 换行 空格

```
[*]
# change these settings to your own preference
# 将这些设置更改为您自己的首选项
# 缩进样式=空格
indent_style = space
# 缩进大小=2
indent_size = 2
# we recommend you to keep these unchanged
# 我们建议你保持这些不变
# 换行符类型 = lf
end_of_line = lf
# 字符集=utf-8
charset = utf-8
# 删除行尾空格 = 是
trim_trailing_whitespace = true
# 插入最后一行=真
insert_final_newline = true


