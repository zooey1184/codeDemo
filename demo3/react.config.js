const path = require('path')
/**
 * react 个性化配置
 * 注意：不支持异步获取
 */
const config = {
  /** entry 入口文件
   * config 配置自动寻找 index.html  index.js
   * string 文件入口
   * object {path, filename?} path=> 文件夹入口  filename => 最终展示默认index.html
   */
  entry: {
    main: path.join(__dirname, './src/pages/a'),
    b: path.join(__dirname, './src/pages/b'),
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}

module.exports = config