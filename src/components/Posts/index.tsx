
import { AvatarFollower } from "../AvatarFollower";
import SemCurti from "../../assets/SemCurti.png";
import { StyledLisFollower, StyledDivFooterPost } from "./style";
import { useContext, useState } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalPost } from "../ModalPost";

export const Posts = () => {
  const { posts } = useContext(PostsContext);
  const { users } = useContext(UserContext);
  const [modal, setModal] = useState(false)
  const [idPost, setIdPost] = useState<number>(0)
    const openModal = (id: number) => {
      setModal(!modal)
      setIdPost(id)
    }
  return (
    <>
      {modal && <ModalPost id={idPost}></ModalPost>}
      {posts ? (
        <StyledLisFollower>
          {posts.map((post) =>
            users?.map((user) =>
              post.userId == user.id ? (
                <li>
                  <AvatarFollower
                    fotoAvatar={user.img}
                    nome={user.name}
                    level={user.level}
                  />
                  <h2>{post.title}</h2>
                  <span>{post.description}</span>
                  <StyledDivFooterPost>
                    <button onClick={()=>openModal(post.id)}>Abrir Post</button>
                    <div>
                      <img src={SemCurti} alt="SemCurti" />
                      <span>0</span>
                    </div>
                  </StyledDivFooterPost>
                </li>
              ) : (
                <></>
              )
            )
          )}
        </StyledLisFollower>
      ) : (
        <div>Sem posts</div>
      )}
    </>
  );
};

function useSate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

