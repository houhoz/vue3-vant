import { Module } from 'vuex'
import router from '@/router'
import { login, fetchUserInfo, logout } from '@/api/user'

export interface UserState {
  token: string
  info: Record<string, string | number>
}

const user = {
  state: {
    token: '',
    info: {},
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            // @ts-ignore
            const result = response.data
            commit('SET_TOKEN', result.token)
            router.push({ name: 'Home' })
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        fetchUserInfo()
          .then(response => {
            // @ts-ignore
            const result = response.data
            commit('SET_INFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '')
            resolve(true)
          })
          .catch(err => {
            console.log('logout fail:', err)
          })
          .finally(() => {})
      })
    },
  },
}

export default user as Module<UserState, Record<string, unknown>>
