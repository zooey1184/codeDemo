const path = require('path')
/**
 * react 个性化配置
 * 注意：不支持异步获取
 */
const config = {
  // 部署应用包时的基本 URL 暂时只配置了生产环境  默认配置 '/'
  // ps: 配置的另外几种方式  process.env.PUBLIC_URL   package.json中homepage字段
  publicPath: '/h5/pages/',
  /** entry 入口文件
   * config 配置自动寻找 index.html  index.js
   * string 文件入口
   * object {path, filename?} path=> 文件夹入口  filename => 最终展示默认index.html
   */
  entry: {
    main: path.join(__dirname, './src/pages/a'),
    // b: path.join(__dirname, './src/pages/b'),
  },
  // resolve 暂时只提供 alias 入口配置
  resolve: {
    // 别名设置
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  // module 暂时只提供 rules 入口配置
  module: {
    // loader 配置 这里新增配置loader
    rules: []
  },
  sourceMap: 'true', // production 环境  是否默认开启
  // plugin 新增配置plugins插件
  plugins: [],
  devServer: {
    // port: 3001,
    // proxy: {}
  },
  // outputDir: 'build' // 导出目录 默认为build
}

module.exports = config