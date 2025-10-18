import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      fs: {
        // Permitir acceso a la carpeta del usuario y node_modules global
        allow: [
          './',
          'C:/Users/AXELL/node_modules',
          'C:/Users/AXELL/Desktop/EXAMANIA',
        ],
      },
    },
  },
});
