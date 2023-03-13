import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps, IPost, IPostContext } from "./@types";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext";

export const PostsContext = createContext({} as IPostContext);

export const PostsProvider = ({ children }: IDefaultProviderProps) => {
  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [postsUserLogado, setpostsUserLogado] = useState<IPost[] | null>(null);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        const response = await api.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  const createPost = async (formData: IPost) => {
    try {
      const newFormData = {
        title: formData.title,
        description: formData.description,
        userId: user?.id,
      };
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/posts", newFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      posts && setPosts([...posts, response.data]);
        postsUserLogado &&
        setpostsUserLogado([...postsUserLogado, response.data]);
      toast.success("Publicação feita com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (idPost: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/posts/${idPost}`, {
        headers: {
          Authorization: `Bearer${token}`,
        },
      });
      const filteredPosts = posts?.filter((post) => {
        post.id !== idPost;
      });
      filteredPosts && setPosts(filteredPosts);
      const filteredPostsUserLogado = postsUserLogado?.filter(
        (postsUserLogado) => {
          postsUserLogado.id !== idPost;
        }
      );
      filteredPostsUserLogado && setpostsUserLogado(filteredPostsUserLogado);
      toast.success("Publicação removida com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const editPosts = async (formData: IPost, idPost: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.patch(`/posts/${idPost}`, formData, {
        headers: {
          Authorization: `Bearer${token}`,
        },
      });
      const newPosts = posts?.map((post) => {
        if (post.id === idPost) {
          return {
            ...posts,
            ...formData,
          };
        } else {
          return post;
        }
      });
      const newPostsUserLogado = postsUserLogado?.map((post) => {
        if (post.id === idPost) {
          return {
            ...posts,
            ...formData,
          };
        } else {
          return post;
        }
      });
      newPosts && setPosts(newPosts);
      newPostsUserLogado && setpostsUserLogado(newPostsUserLogado);
      toast.success("Publicação editada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        createPost,
        deletePost,
        editPosts,
        postsUserLogado,
        setpostsUserLogado,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
