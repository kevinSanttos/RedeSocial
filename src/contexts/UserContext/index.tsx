import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  IDefaultProviderProps,
  IUser,
  IUserContext,
  IUserLogin,
  IUserRegister,
} from "../UserContext/@types";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [following, setFollowing] = useState(0)

  const navigate = useNavigate();

    useEffect(()=>{
        const getAllUsers = async ()=>{
            try {
                const token = localStorage.getItem("@TOKEN")
                const response = await api.get("/users" ,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUsers(response.data)  
            } catch (error) {
                console.log(error)
            }
        }
        getAllUsers()
    },[])

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      userAutoLogin();
    }
  }, []);

  const userRegister = async (formData: IUserRegister) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      console.log(formData);
      toast.success("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: IUserLogin) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("Login feito com sucesso!");
      navigate("/Dashboard");
    } catch (error) {
      toast.error("Usuário ou senha incorretos");
    } finally {
      setLoading(false);
    }
  };


  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogOut,
        users,
        following,
        setFollowing
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
