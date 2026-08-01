import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://montarazoutdoors.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404.html"),
    }),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing:{
      prefixDefaultLocale: true,  
    },
    
 },

  vite: {
    plugins: [tailwindcss()],
  },
});