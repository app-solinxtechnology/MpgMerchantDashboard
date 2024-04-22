import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsPathsResolve from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsPathsResolve()],
})
