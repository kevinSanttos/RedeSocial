export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICommentsContext{
  createComments: (formData: INewComment) => Promise<void>,
  deleteComments: (idComments: number) => Promise<void>,
  updateComments: (formData: IComment, idComments: number) => Promise<void>,
  comments: IComment[]
}
export interface IComment {
  userId: number,
  postId: number,
  description: string,
  id: number
}
export interface INewComment {
  userId: number,
  postId: number,
  description: string,
}