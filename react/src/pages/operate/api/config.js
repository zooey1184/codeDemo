import env from '@/common/js/global/env'
let origin = window.sessionStorage.getItem('originHost') || 'uat.51bmsh.com'
const PRO = '/vimsisdn/api'
const envApi = env(['127.0.0.1', 'localhost', 'uat.51bmsh.com'])
let o = envApi.origin(origin)
if (!envApi.isDev()) {
  o = '/'
}

export default o + PRO