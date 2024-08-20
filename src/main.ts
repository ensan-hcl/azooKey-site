import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from 'vue-router/auto-routes'
import { router } from './router'

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes
  },
  ({ app, initialState }) => {}
)
