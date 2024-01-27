import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  jsxInject: `import * as ReactDOM from 'react-dom';`,
  plugins: [
    react(),
  ],
  // base: "/the-Artemis-Website-V2/"
  
})
