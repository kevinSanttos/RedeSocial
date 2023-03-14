import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CommentsContext } from "../../contexts/CommentsContext";
import { PostsContext } from "../../contexts/PostsContext";
import { IPost } from "../../contexts/PostsContext/@types";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Form/Input";
import {
  StyledComments,
  StyledDashboardDiv,
  StyledModalForm,
  StyledUlComments,
} from "./style";

interface IModalPostProps {
  currentPost: IPost;
  setCurrentPost: IPost;
}
interface IFormData {
  description: string;
}
export interface INull {
  null: null;
}
export const ModalPost = () => {
  const { comments, createComments } = useContext(CommentsContext);
  const { users, user } = useContext(UserContext);
  const { currentPost, openCloseModal } = useContext(PostsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const submit = (formData: IFormData) => {
    createComments({
      ...formData,
      postId: currentPost?.id as number,
      userId: user?.id as number,
    });
    reset();
  };
  return (
    <StyledDashboardDiv className="containerModal">
      <div className="realContainer">
        <div className="conteudoPost">
          <button onClick={() => openCloseModal(null)}>X</button>
          <h2>{currentPost?.title}</h2>
          <p>{currentPost?.description}</p>
        </div>
        <div className="comentarios">
          {comments ? (
            <StyledUlComments>
              {comments.map(
                (comment) =>
                  comment.postId == currentPost?.id && (
                    <StyledComments>
                      <div>
                        {users?.map((user) =>
                          comment.userId == user.id ? (
                            <h3>{user.name}:</h3>
                          ) : null
                        )}
                        <p> {comment.description}</p>
                      </div>
                    </StyledComments>
                  )
              )}
            </StyledUlComments>
          ) : (
            <div>Sem Comentários</div>
          )}
          <StyledModalForm onSubmit={handleSubmit(submit)}>
            <Input
              label={""}
              type={"text"}
              placeholder={"Digite seu comentário"}
              register={register("description")}
              error={errors.description}
            />
            <button type="submit">Enviar</button>
          </StyledModalForm>
        </div>
      </div>
    </StyledDashboardDiv>
  );
};
