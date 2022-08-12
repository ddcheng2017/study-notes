const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
// 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
module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "study-notes",
  description: 'vdoing博客主题模板',
  base: '/study-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "b1992cfc9cee5adef5a2",
        clientSecret: "09fcb6bc6d48a3b38363e0edc85446ebbf8d2ae7",
        owner: "chengdd",
        repo: "study-notes",
      },
    ],
    // 增强 markdown
    [
      "md-enhance", {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
}