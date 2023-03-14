export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface IPostContext {
  posts: IPost[] | null;
  setPosts: React.Dispatch<React.SetStateAction<IPost[] | null>>;
  createPost: (formData: IPost) => Promise<void>;
  deletePost: (idPost: number) => Promise<void>;
  editPosts: (formData: IPost, idPost: number) => Promise<void>;
  postsUserLogado: IPost[] | null;
  setpostsUserLogado: React.Dispatch<React.SetStateAction<IPost[] | null>>;
  currentPost: IPost | null;
  openCloseModal: (post: IPost) => void;
}
export interface IPost {
  id: number;
  title: string;
  description: string;
  userId: number;
}
