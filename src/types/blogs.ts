export interface FBlog {
  id?: number;
  title: string;
  author: string;
  gmtCreate?: string;
  content: string;
  likes?: number;
  tags?: FTag[];
}

export interface FTag {
  id?: number;
  name: string;
  color?: string;
}
