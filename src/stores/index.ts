import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate' // 数据持久化

const store = createPinia()
store.use(
  createPersistedState({
    storage: {
      getItem: localStorage.getStorageSync,
      setItem: localStorage.setStorageSync,
    },
  }),
)

export default store

// 模块统一导出
export * from './counter'
