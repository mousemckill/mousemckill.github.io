/// <reference types="vite/client" />
// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';
import type { Theme } from 'vitepress';
import 'uno.css';
import './style.css';

const modules = import.meta.glob('./components/*.vue', {
  import: 'default',
  eager: true,
});

const getComponentName = (path: string) => {
  const fileName = path.split('/').pop()?.split('.')[0];
  if (!fileName) {
    throw new Error('Invalid file path: ' + path);
  }

  return fileName.charAt(0).toUpperCase() + fileName.slice(1);
};

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    for (const path in modules) {
      app.component(getComponentName(path), modules[path] as any);
    }
  },
} satisfies Theme;
