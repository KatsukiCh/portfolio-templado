import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp'], // Add other image formats as needed
});