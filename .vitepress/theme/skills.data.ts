import { createContentLoader } from 'vitepress';

export interface Skill {
  title: string;
  title_ru: string;
  url: string;
  items: string[];
}

declare const data: Skill[];
export { data };

export default createContentLoader('skills/*.md', {
  includeSrc: false,
  excerpt: false,
  render: false,
  transform: data => {
    return data.map(item => ({ ...item.frontmatter }) as Skill);
  },
});
