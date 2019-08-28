// https: //github.com/timarney/react-app-rewired/blob/master/README_zh.md
// https: //github.com/arackaf/customize-cra/blob/master/api.md#addlessloaderloaderoptions
const {
  override,
  // addWebpackModuleRule,
  addWebpackAlias,
  addLessLoader
} = require("customize-cra");

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  webpack: override(
    addLessLoader(),
    addWebpackAlias({
      '@': resolve('src')
    })
  ),
}
