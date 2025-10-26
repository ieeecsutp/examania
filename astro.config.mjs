import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración optimizada para producción
  output: 'static',
  
  vite: {
    server: {
      fs: {
        // Permitir acceso solo en desarrollo
        allow: [
          './',
        ],
      },
    },
  },
});
