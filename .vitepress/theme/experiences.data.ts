import { createContentLoader } from 'vitepress';

export interface Experience {
  title: string;
  title_ru: string;
  url: string;
  dates: {
    start: string;
    end?: string;
  };
  position: string;
  org: string;
  tasks: string[];
  tasks_ru: string[];
}

declare const data: Experience[];
export { data };

export default createContentLoader('experiences/*.md', {
  includeSrc: false,
  excerpt: false,
  render: false,
  transform: data => {
    return data
      .map(item => ({ ...item.frontmatter }) as Experience)
      .sort((a, b) => {
        if (!a.dates?.start || !a.dates?.end) {
          return 0;
        }
        if (!b.dates?.start || !b.dates?.end) {
          return 0;
        }

        return +new Date(b.dates.start) - +new Date(a.dates.end);
      });
  },
});
