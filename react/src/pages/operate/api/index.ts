import fetch from 'cross-fetch';
import config from './config'

type CB = (request: any, res: any) => any
interface Options {
  url: string,
  type?: string,
  header?: any,
  successCB?: CB
}

interface SuccessCB {
  ret: any,
  success: string
}
interface FailCB {
  msg: string,
  code: string | number
}
export default function api(options: Options) {
  let url = options.url
  if (!url.match(/http(s)?/g)) {
    url = config + url
  }
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