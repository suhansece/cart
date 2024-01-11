import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_URL}`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY,
          changeOrigin: true,
          secure: false,
        },
        '/admin/api': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace('/admin', ''),
          secure: false,
        },
      },
    },
  };
});
