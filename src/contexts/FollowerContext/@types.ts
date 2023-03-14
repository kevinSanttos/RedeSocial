export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IFollowerContext {
  follow: (formData: IFollower) => Promise<void>,
  unfollow: (idFollower: number) => Promise<void>,
  followers: IFollower[] | null
}

export interface IFollower {
	name: string,
	profession: string,
	userId: number,
	id: number,
  level:string,
  img: string
}