import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// En GitHub Pages el sitio se publica bajo /<nombre-del-repo>/; en local y en
// Vercel, en la raíz. GitHub Actions define GITHUB_REPOSITORY, así que el base
// se ajusta solo. Se puede forzar con la variable VITE_BASE (por ejemplo '/'
// si usás un dominio propio).
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  base: process.env.VITE_BASE ?? (repo ? `/${repo}/` : '/'),
  plugins: [react()],
})
