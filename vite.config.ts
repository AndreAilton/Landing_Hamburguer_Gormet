import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Troque 'nome-do-seu-repo' pelo nome do seu repositório no GitHub
  // Exemplo: se o repo for https://github.com/usuario/hamburgueria, use '/hamburgueria/'
  base: '/Landing_Hamburguer_Gormet/', 
})