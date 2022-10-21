/*
 * @Description: 
 * @Date: 2022-10-21 16:38:49
 * @LastEditTime: 2022-10-21 16:52:39
 */
export default {
    title: 'HH website',
    description: 'IT knowledge',
    themeConfig: {
        nav: [
            { text: '编码风格', link: '/code-features/eslint' },
        ],
        sidebar: [
            {
                text: '编码风格',
                items: [
                    { text: '.eslintrc', link: '/code-features/eslint' },
                    { text: '.prettier', link: '/code-features/prettier' },
                    { text: 'web规范', link: '/code-features/web-rules' },
                    { text: 'vscode settings', link: '/code-features/vs-settings' },
                ]
            },
            {
                text: 'ddd',
                items: []
            }
        ]
    }
}