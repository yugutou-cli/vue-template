import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

// 这将在运行时更新路由而无需重新加载页面
if (import.meta.hot) {
  handleHotUpdate(router)
}
