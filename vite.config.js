import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  eslint: {
    enable: true,
    configFile: '.eslintrc.cjs', // Point to the new configuration file
  },
});