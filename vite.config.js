import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],

    build: {
        // 🔥 This disables Rollup native binary loading
        //    and forces Vite to fall back to JS implementation
        rollupOptions: {
            treeshake: true
        }
    }
})
