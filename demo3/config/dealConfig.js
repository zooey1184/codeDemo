const fs = require('fs')
// const path = require('path');
const paths = require('./paths');
const useReactConfig = fs.existsSync(paths.reactConfig);
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getReactConfig = () => {
  let ReactConfig;
  if (useReactConfig) {
    ReactConfig = require(paths.reactConfig)
  }
  return ReactConfig
}
let reactConfig = getReactConfig()

/**获取入口文件总配
 * entry = {
    main: {
      path: [
        isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
        paths.appIndexJs,
      ].filter(Boolean),
      filename: 'index.html',
      template: paths.appHtml
    }
  }
 */
const getEntryConfig = (isEnvDevelopment) => {
  let entry = {}
  if (reactConfig) {
    let entryConfig = reactConfig.entry
    let keys = Object.keys(entryConfig)
    if (keys.length < 1) {
      console.error('entry 配置不正确，不能为空')
      return false
    } else {
      for (let i in entryConfig) {
        let e = entryConfig[i]
        let epath = e.path || e
        let href = paths.appHtml;
        if (epath.match(/[0-9a-zA-Z_\-]\.js$/)) {
          let htm = epath.replace(/[0-9a-zA-Z_\-]*\.js$/, 'index.html')
          if (fs.existsSync(htm)) {
            href = htm
          }
        } else {
          epath = epath + '/index.js'
          let htm = epath.replace(/[0-9a-zA-Z_\-]*\.js$/, 'index.html')
          if (fs.existsSync(htm)) {
            href = htm
          }
        }
        entry[i] = {
          path: [
            isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
            epath,
          ].filter(Boolean),
          filename: e.filename ? e.filename : (i === 'main' ? 'index.html' : (keys.length > 1 ? `${i}.html` : 'index.html')),
          template: href
        }
      }
    }
  } else {
    entry = {
      main: {
        path: [
          isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
          paths.appIndexJs,
        ].filter(Boolean),
        filename: 'index.html',
        template: paths.appHtml
      }
    }
  }
  return entry
}


const getResolve = () => {
  let resolve = {}
  if (reactConfig) {
    resolve = reactConfig.resolve || {}
  }
  return resolve
}

module.exports = {
  getReactConfig,
  getEntryConfig,
  getResolve
}