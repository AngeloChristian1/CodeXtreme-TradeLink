import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  eslint: {
    enable: true,
    configFile: '.eslintrc.json', // Point to the new configurationfile
},
});