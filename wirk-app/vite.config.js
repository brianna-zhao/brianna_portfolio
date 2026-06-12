import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps every asset path relative so the production build can be
// dropped straight into the static portfolio (GitHub Pages) at any sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
