import { ARTICLES, type Article } from "../data/articles";

export const getArticles = () => {
  return new Promise<Article[]>((res) => res(ARTICLES));
};

export const getCategories = () => {
  return new Promise<string[]>((res) =>
    res([...new Set(ARTICLES.map((article) => article.category))])
  );
};
