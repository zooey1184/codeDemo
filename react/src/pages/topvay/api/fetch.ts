import fetch from 'cross-fetch';

type CB = (request:any, res:any)=> any
interface Options {
  url: string,
  type?:string,
  header?: any,
  successCB?: CB
}
let obj = {
  'api-version': '1.0',
  'device-type': `H5-IOS`,
  'app-name': 'TopVay',
  'language': 'CN', // 中文 VN
  'token': localStorage.getItem('token')
}
export function api(options: Options) {
  return fetch(options.url, {
    method: options.type || 'post',
    headers: options.header || obj
  }).then(res => {
    if (res.status===200) {
      return res.json()
    }
  }).then(res=> {
    if ((res as unknown as any).success) {
      return res
    } else {
      if ((res as unknown as any).code === 403) {
        console.log('un login');
      }
    }
  }).catch(e=> {
    return new Error(e)
  })
}