import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // change this to your desired port
  },
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})