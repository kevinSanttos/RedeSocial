import { AvatarFollower } from "../AvatarFollower";
import SemCurti from "../../assets/SemCurti.png";
import Curti from "../../assets/Curti.png"
import { StyledLisFollower, StyledDivFooterPost } from "./style";
import { useContext, useState } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalPost } from "../ModalPost";

export const Posts = () => {
  const { posts, currentPost, openCloseModal, like, setLike } = useContext(PostsContext);
  const { users } = useContext(UserContext);
  const [isLiked, setIsLIked] = useState(false)

  const likePost = (e:any) =>{
    setIsLIked(!isLiked)
    console.dir(e.target)
    if(isLiked == false){
      e.target.src ={Curti}
      setLike(like + 1)
    }else if(isLiked == true && like > 0){
      setLike(like - 1)
      e.target.src={SemCurti};
    }
  }

  return (
    <>
      {currentPost && <ModalPost />}
      {posts ? (
        <StyledLisFollower>
          {posts.map((post) =>
            users?.map((user) =>
              post.userId == user.id ? (
                <li>
                  <AvatarFollower
                    fotoAvatar={user.imgPerfil}
                    nome={user.name}
                    profession={user.profession}
                  />
                  <h2>{post.title}</h2>
                  <span>{post.description}</span>
                  <StyledDivFooterPost>
                    <button onClick={() => openCloseModal(post)}>
                      Abrir Post
                    </button>
                    <div>
                      <img onClick={(e)=>likePost(e)} src={SemCurti} alt="SemCurti" />
                      <span>{like}</span>
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
