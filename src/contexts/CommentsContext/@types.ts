export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICommentsContext{
  createComments: (formData: IComments) => Promise<void>,
  deleteComments: (idComments: number) => Promise<void>,
  updateComments: (formData: IComments, idComments: number) => Promise<void>,
  comments: IComments[] | null
}
export interface IComments {
  userId: number,
  postId: number,
  description: string,
  id: number
}