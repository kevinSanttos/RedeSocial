import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostsContext } from "../../../contexts/PostsContext";
import { IPost } from "../../../contexts/PostsContext/@types";
import { Input } from "../Input";
import { StyledPostsForm } from "./style";

export const InputDashBoard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPost>();
  const { createPost } = useContext(PostsContext);

  const submit: SubmitHandler<IPost> = (formData) => {
    createPost(formData);
    reset();
  };

  return (
    <StyledPostsForm onSubmit={handleSubmit(submit)}>
      <Input
        type={"text"}
        placeholder={"Digite o título do post"}
        register={register("title")}
        error={errors.title}
        label={""}
      />
      <Input
        type={"text"}
        placeholder="Digite a descrição do  seu post..."
        register={register("description")}
        label={""}
        classname={"textarea"}
      />
      <button type="submit">Postar</button>
    </StyledPostsForm>
  );
};
