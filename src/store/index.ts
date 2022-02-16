import { createStore } from 'vuex'
import test, { TestState } from './modules/test'
import user from './modules/user'

export interface State {
  test: TestState
}

const store = createStore({
  modules: {
    test,
    user,
  },
})

export default store
