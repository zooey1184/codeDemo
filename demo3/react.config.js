const path = require('path')
/**
 * react 个性化配置
 * 注意：不支持异步获取
 */
const config = {
  /**
   * 部署应用包时的基本 URL 暂时只配置了生产环境
   * 默认配置 '/'
   * ps: 配置的另外几种方式 process.env.PUBLIC_URL package.json中homepage字段
   */
  // publicPath: '/',

  /** 
   * entry: string | object 入口文件配置
   * 如果路径只是到文件夹，则配置自动寻找 index.html  index.js
   * string 文件入口
   * object {path, filename?} path=> 文件夹入口  filename => 最终访问形式
   * filename 默认index.html
   * 可配置多入口
   */
  entry: {
    main: path.join(__dirname, './src/pages/a'),
    // main: path.join(__dirname, './src/pages/a/index.js'),
    // main: {
    //   path: path.join(__dirname, './src/pages/a'),
    //   filename: 'index.html'
    // },
    // b: path.join(__dirname, './src/pages/b'),
  },

  /**
   * resolve:object webpack中resolve配置
   * learn more：https://www.webpackjs.com/configuration/resolve/
   * 暂时只提供alias别名设置
   */
  resolve: {
    /**
     * alias: object 别名设置
     */
    alias: {
      '@': path.join(__dirname, './src')
    }
  },

  /**
   * module: object webpack中module配置
   * learn more: https://www.webpackjs.com/concepts/modules/
   */
  module: {
    /**
     * rules: object[] loader规则配置
     * 默认支持less，sass以及module导入
     * sass需要node>12.0
     */
    rules: []
  },

  /**
   * sourceMap:string
   * 适用 production 环境
   * 是否默认开启sourceMap
   * 可选值："true" || "false"
   */
  // sourceMap: 'true',

  /**
   * plugins: []
   * webpack plugins配置
   * 如果之前存在会覆盖原先的配置
   * 默认空数组
   */
  // plugins: [],

  /**
   * devServer: object 本地服务配置
   * 暂时开放proxy && port
   */
  // devServer: {
  //   /**
  //    * port：number || string
  //    * 端口设置
  //    * 默认值：3000
  //    */
  //   port: 3000,
  //   /** 
  //    * proxy: string
  //    * 同package.json 的proxy字段
  //    * 可以使用建立setupProxy.js的独立文件配置proxy
  //    * 需要使用中间件，参数为App 
  //    */
  //   // proxy: ''
  // },

  /**
   * outputDir: string 打包导出目录
   * 默认 build 文件夹
   */
  // outputDir: 'build'
}

module.exports = config