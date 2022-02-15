import { Module } from 'vuex'

export interface User {
  name: string
}

export interface TestState {
  users: User[]
}

export default {
  state: {
    users: [{ name: 'sps' }],
  },
  getters: {
    userCount(state) {
      return state.users.length
    },
  },
  mutations: {
    ADD_USER(state, user: User) {
      state.users.push(user)
    },
  },
  actions: {},
  namespaced: true,
} as Module<TestState, Record<string, unknown>>
