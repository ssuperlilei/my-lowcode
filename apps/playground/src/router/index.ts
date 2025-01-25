import { createRouter, createWebHistory } from 'vue-router'

const constantRoutes = [{

  path: '/',
  component: async () => import('@/pages/demo/index.vue'),
  name: 'index',
  meta: {
    title: '组件',
  },

}]

const router = createRouter({
  history: createWebHistory('/'), // 设置基地址为根路径
  routes: [...constantRoutes], // 合并固定路由和异步路由
})

export default router
