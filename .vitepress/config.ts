import { defineConfigWithTheme } from 'vitepress';
import Unocss from 'unocss/vite';

export type Theme = {
  avatar: string;
  socialLinks: {
    email: string;
    github: string;
    linkedin: string;
    telegram: string;
  };
};

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<Theme>({
  title: 'Maksim Severukhin',
  description: 'Maksim Severukhin - CV',
  themeConfig: {
    avatar: 'https://avatars.githubusercontent.com/u/1708896?v=4',
    socialLinks: {
      email: 'mousemckill@gmail.com',
      github: 'https://github.com/mousemckill',
      linkedin: 'https://www.linkedin.com/in/maks-severukhin',
      telegram: 'https://t.me/mousemckill',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      description: 'Максим Северухин - резюме',
      title: 'Максим Северухин',
    },
  },
  vite: {
    plugins: [Unocss()],
  },
});
