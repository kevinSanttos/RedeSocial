import { StyledAvatar } from "./styled";

interface IAvatar {
  fotoAvatar: string;
  nome: string;
  profession: string;
}

export const Avatar = ({ fotoAvatar, nome, profession }: IAvatar) => {
  return (
    <StyledAvatar>
      <div>
        <img src={fotoAvatar} alt={nome} />
      </div>
      <div>
        <h3>{nome}</h3>
        <p>{profession}</p>
      </div>
    </StyledAvatar>
  );
};
