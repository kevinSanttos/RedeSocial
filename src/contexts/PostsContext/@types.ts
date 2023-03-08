export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface IPostContext{
  posts: IPost[] | null, 
  setPosts: React.Dispatch<React.SetStateAction<IPost[] | null>>,
  createPost: (formData: IPost) => Promise<void>,
  deletePost: (idPost: number) => Promise<void>,
  editPosts: (formData: IPost, idPost: number) => Promise<void>,
  postsUserLogado: IPost[] | null,
  setpostsUserLogado: React.Dispatch<React.SetStateAction<IPost[] | null>>
}
export interface IPost{
  id: number,
  title: string,
  author: string,
  description: string,
  userId: number
}
