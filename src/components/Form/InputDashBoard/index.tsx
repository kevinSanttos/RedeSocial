import {StyledInput} from "./style"

export const InputDashBoard = () => {
    return (
        <StyledInput>
            <input type="text" placeholder="Digite o título do seu post aqui..." required/>
            <textarea name="text" id="text" placeholder="Digite a descrição do  seu post..." required></textarea>
            <button type="submit">Postar</button>
        </StyledInput>
    );
  };