export interface Article {
  author: {
    username: string;
    bio: string | null;
    image: string;
    following: string;
  };
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
}
