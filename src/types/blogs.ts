export interface FTag {
  content: string;
  color: string;
}

export interface FBlog {
  blogId: number;
  title: string;
  author: string;
  tags: FTag[];
  gmtCreate: string;
  content: string;
  likes: number;
}
