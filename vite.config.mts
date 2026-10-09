import { defineConfig } from 'vite';
import { cemGeneratorPlugin } from '@wc-toolkit/cem-generator-bundler/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [cemGeneratorPlugin()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLib',
      fileName: format => `index.${format}.js`,
    },
  },
  optimizeDeps: {
    include: ['@open-wc/testing'],
  },
});
