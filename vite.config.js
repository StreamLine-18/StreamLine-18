import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: '/'` is correct for a custom domain (CNAME) or a `<user>.github.io` repo.
// For a plain project repo served at `<user>.github.io/<repo>/`, change it to '/<repo>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
