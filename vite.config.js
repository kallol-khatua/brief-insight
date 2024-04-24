import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically register and update the service worker
      devOptions: {
        enabled: true, // Enable PWA functionality in development mode for testing
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // Additional static assets to include
      manifest: {
        name: 'Weather Info',
        short_name: 'Weather Info',
        description: 'Get weather info city wise.',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone', // 'standalone' for PWA-like behavior
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png', // Path to your app icon
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png', // Larger icon for devices
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // Example cache configuration
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /api\/.*\.json/, // Example: Cache API responses
            handler: 'CacheFirst', // Use CacheFirst strategy
            options: {
              cacheName: 'api-cache', // Custom cache name
              expiration: {
                maxEntries: 10000, // Maximum number of entries
                maxAgeSeconds: 60 * 60, // Maximum age of cache (1 day)
              },
            },
          },
        ],
      },
    }),
  ],
});
