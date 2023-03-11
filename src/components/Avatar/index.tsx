import {StyledAvatar} from "./styled"

interface IAvatar {
    fotoAvatar: string,
    nome: string,
    level: string 
}

export const Avatar = ({fotoAvatar, nome, level} :IAvatar) => {
  return (
    <StyledAvatar>
        <div>
            <img src={fotoAvatar} alt={nome} />
        </div>
        <div>
            <h3>{nome}</h3>
            <p>{level}</p>
        </div>
    </StyledAvatar>
  );
};
