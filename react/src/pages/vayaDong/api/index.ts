/* eslint-disable */
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
let obj = {
  'api-version': '1.0',
  'device-type': `H5-IOS`,
  'app-name': 'VayaDong',
  'language': 'CN', // 中文 VN
  'token': localStorage.getItem('token')
}
export default function api(options: Options) {
  let url = options.url
  if (!url.match(/http(s)?/g)) {
    url = config + url
  }
  return fetch(url, {
    method: options.type || 'post',
    headers: options.header || obj
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    }
  }).then(res => {
    if ((res as unknown as SuccessCB).success) {
      return res
    } else {
      if ((res as unknown as FailCB).code === 403) {
        console.log('un login');
      }
    }
  }).catch(e => {
    return new Error(e)
  })
}