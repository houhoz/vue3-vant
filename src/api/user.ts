import request from '@/utils/request'
import { AxiosPromise } from 'axios'

const userApi = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  UserInfo: '/user/info',
}

export function login(params: {
  userName: string
  password: string
}): AxiosPromise {
  return request({
    url: userApi.Login,
    method: 'post',
    data: params,
  })
}

export function fetchUserInfo(): AxiosPromise {
  return request({
    url: userApi.UserInfo,
    method: 'get',
  })
}
export function logout(): AxiosPromise {
  return request({
    url: userApi.Logout,
    method: 'POST',
  })
}
