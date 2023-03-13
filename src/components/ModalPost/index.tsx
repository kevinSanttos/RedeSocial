import { useContext } from "react";
import { useForm } from "react-hook-form/dist/useForm";
import { CommentsContext } from "../../contexts/CommentsContext";
import { PostsContext } from "../../contexts/PostsContext";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Form/Input";
import { StyledComments, StyledDashboardDiv, StyledModalForm } from "./style";

interface IModal {
  id: number;
}
export const ModalPost = ({ id }: IModal) => {
  const { comments, createComments } = useContext(CommentsContext);
  const { posts } = useContext(PostsContext);
  const { users } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (formData) => {
    createComments({ ...formData });
  };
  return (
    <>
      {posts &&
        posts.map((post) =>
          post.id == id ? (
            <StyledDashboardDiv className="containerModal">
              <div className="conteudoPost">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <div className="comentarios">
                {comments ? (
                  <ul>
                    {comments.map(
                      (comment) =>
                        comment.postId == post.id && (
                          <StyledComments>
                            {users?.map((user) =>
                              comment.userId == user.id ? (
                                <h3>{user.name}</h3>
                              ) : null
                            )}
                            {comment.description}
                            <button type="button">excluir</button>
                          </StyledComments>
                        )
                    )}
                  </ul>
                ) : (
                  <div>Sem Comentários</div>
                )}
                <StyledModalForm
                  onSubmit={createComments({
                    ...formData,
                    postId: post.id,
                    userId: user.id,
                  })}
                >
                  <Input
                    label={""}
                    type={"text"}
                    placeholder={"Digite seu comentário"}
                    register={register("description")}
                    error={errors.description}
                  />
                  <button type="submit">Adicionar</button>
                </StyledModalForm>
              </div>
            </StyledDashboardDiv>
          ) : null
        )}
    </>
  );
};
