export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICommentsContext{
  createComments: (formData: IComment) => Promise<void>,
  deleteComments: (idComments: number) => Promise<void>,
  updateComments: (formData: IComment, idComments: number) => Promise<void>,
  comments: IComment[] | null
}
export interface IComment {
  userId: number,
  postId: number,
  description: string,
  id: number
}