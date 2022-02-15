import { createStore } from 'vuex'
import test, { TestState } from './modules/test'

export interface State {
  test: TestState
}

const store = createStore({
  modules: {
    test,
  },
})

export default store
