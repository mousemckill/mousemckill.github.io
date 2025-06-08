import { createContentLoader } from 'vitepress';

interface Education {
  title: string;
  title_ru: string;
  url: string;
  date: string;
  degree: string;
  degree_ru: string;
}

declare const data: Education[];
export { data };

export default createContentLoader('education/*.md', {
  includeSrc: false,
  excerpt: false,
  render: false,
  transform: data => {
    return data
      .map(item => ({ ...item.frontmatter }) as Education)
      .sort((a, b) => {
        if (!a.date || !b.date) {
          return 0;
        }

        return +new Date(b.date) - +new Date(a.date);
      });
  },
});
