export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  profession: string;
  level: string;
}

export interface IUserRegister {
  id: number;
  email: string;
  name: string;
  password: string;
  profession: string;
  level: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IUserRegister) => Promise<void>;
  userLogin: (formData: IUserLogin) => Promise<void>;
  userLogOut: () => void;
}
