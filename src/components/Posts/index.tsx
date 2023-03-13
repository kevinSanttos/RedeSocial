import { AvatarFollower } from "../AvatarFollower";
import SemCurti from "../../assets/SemCurti.png";
import { StyledLisFollower, StyledDivFooterPost } from "./style";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { UserContext } from "../../contexts/UserContext";

export const Posts = () => {
  const { posts } = useContext(PostsContext);
  const { users } = useContext(UserContext);

  return (
    <>
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
                    <button>Abrir Post</button>
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
