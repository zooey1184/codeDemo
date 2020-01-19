import fetch from 'cross-fetch';
import config from './config'

export default function api(options) {
  let url = options.url
  // if (!url.match(/http(s)?/g)) {
  //   url = config + url
  // }
  return fetch(url, {
    method: options.type || 'post'
  }).then(res => {
    if (res.status.toString().match(/20\d/)) {
      return res.json()
    }
  }).then(res => {
    return res
  }).catch(e => {
    return new Error(e)
  })
}