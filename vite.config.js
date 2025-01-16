import { defineConfig, loadEnv } from "vite";
import { ngrok } from "vite-plugin-ngrok";

const { NGROK_AUTH_TOKEN, NGROK_DOMAIN } = loadEnv('', process.cwd(), 'NGROK')

console.log(NGROK_DOMAIN)


export default defineConfig({
  plugins: [
    ngrok({ authtoken: NGROK_AUTH_TOKEN, domain: NGROK_DOMAIN, })
  ],
  base: '/tg-mini-app-playground/',
  server: {
    port: 3000,
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
  },
  preview: {
    port: 8000
  },
  root: "src",
});
