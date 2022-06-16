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
{
  "workbench.colorTheme": "Atom One Dark",
  "editor.fontSize": 17,
  "editor.lineHeight": 27,
  "editor.fontFamily": "Fira Code",
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "fileheader.customMade": {
    "Author": "hh",
    "Date": "Do not edit",
    "LastEditors": "hh",
    "LastEditTime": "Do not edit",
    "Description": ""
  },
  "fileheader.cursorMode": {
    "description": "",
    "param": "",
    "return": ""
  },
  "eslint.options": {
    "plugins": [
      "html"
    ]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
 {
  "files.autoSave": "off",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true
}
  
  "workbench.iconTheme": "vscode-icons"
}

