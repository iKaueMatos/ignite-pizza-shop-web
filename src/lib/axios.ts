
import axios from 'axios'
import { env } from '@/env'

export const api = axios.create({
  //baseURL: env.VITE_API_URL,
  baseURL: "http://localhost:3333",
  // para usar os mocks
  //baseURL: "http://localhost:50789",
  withCredentials: true,
})

let VITE_ENABLE_API_DELAY = true

// if (env.VITE_ENABLE_API_DELAY) {
if (VITE_ENABLE_API_DELAY) {

  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}