import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _app: path.resolve(__dirname, 'src/_app/'),
      _entities: path.resolve(__dirname, 'src/_entities/'),
      _widgets: path.resolve(__dirname, 'src/_widgets/'),
      _features: path.resolve(__dirname, 'src/_features/'),
      _pages: path.resolve(__dirname, 'src/_pages/'),
      _shared: path.resolve(__dirname, 'src/_shared/'),
    },
  },
});
