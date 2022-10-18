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
 + Tokyo Night
 + Volar (vue3)

### 配置文件
---
#### vscode settings.json
  ```
    {
  "editor.fontFamily": "Fira Code",
  "workbench.iconTheme": "material-icon-theme",
  "git.path": "D:Gitcmdgit.exe",
  "fileheader.customMade": {
    //此为头部注释
    "Description": "",
    "Date": "Do not edit",
    "LastEditTime": "Do not edit"
  },
  "fileheader.cursorMode": {
    //此为函数注释
    "description": "",
    "param": "",
  },
  "fileheader.configObj": {
    "autoAdd": true, // 默认开启自动添加头部注释，当文件没有设置头部注释时保存会自动添加
    "autoAlready": true, // 默认开启
    "prohibitAutoAdd": [
      "json",
      "md"
    ], // 禁止.json .md文件，自动添加头部注释
    "wideSame": false, // 设置为true开启
    "wideNum": 13 // 字段长度 默认为13
  },
  "editor.lineHeight": 30,
  "workbench.editor.enablePreview": false,
  "git.autofetch": true,
  "gitlens.defaultDateFormat": null,
  "gitlens.defaultDateShortFormat": null,
  "git.enableSmartCommit": true,
  "gitlens.views.branches.files.layout": "list",
  "gitlens.views.branches.avatars": false,
  "git.confirmSync": false,
  "workbench.colorTheme": "Tokyo Night Storm",
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html"
  ],
  "editor.definitionLinkOpensInPeek": true,
  "volar.codeLens.pugTools": true,
  "volar.codeLens.scriptSetupTools": true
}
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


