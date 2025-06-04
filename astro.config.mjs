import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  site: "https://montarazoutdoors.com",
  integrations: [react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing:{
      prefixDefaultLocale: false,  
    },
    
 },

  vite: {
    plugins: [tailwindcss()],
  },
});