import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  // English is the default (unprefixed) locale; other live locales are served
  // under /<code>/. Scaffolded locales are listed so routing/detection knows
  // them, but they only get a page once flipped live in src/i18n/ui.ts.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ne', 'mr', 'ta', 'kn', 'bn', 'pa'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
