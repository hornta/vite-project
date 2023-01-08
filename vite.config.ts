import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({ 
      strategies: "injectManifest",
      registerType: "autoUpdate",
      injectManifest: { injectionPoint: undefined },
      filename: "sw.ts",
      srcDir: "./src/service-worker",
      devOptions: { enabled: true }, })
  ]
})
