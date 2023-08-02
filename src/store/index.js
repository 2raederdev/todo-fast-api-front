import { createStore } from 'vuex'

import todosModule from '@/store/modules/todos/index.js'


const store = createStore({
  modules: {
    todos: todosModule
  }
})

export default store