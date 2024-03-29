export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  author: string;
  avatar: string;
  tags: Tag[];
  description: string;
  date: string;
};

export type MarkdownData = {
  parent: string;
};

export type PostPage = {
  post: BlogPost;
  markdown: MarkdownData;
};
