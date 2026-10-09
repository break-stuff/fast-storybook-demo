import { fastPlugin } from '@wc-toolkit/cem-generator-fast';

export default {
  filePath: './custom-elements.json',
  plugins: [fastPlugin()],
  include: ['src/**/*.ts'],
  exclude: ['src/**/*.stories.ts', 'src/**/*.tests.ts'],
};
