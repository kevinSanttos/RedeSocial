import styled from "styled-components";

export const Main = styled.main`
  background-color: #efefef;
  width: 100%;
  min-height: 100vh;
  padding: 0 200px;

  @media (max-width: 665px) {
    padding: 0;
  }

  .fotosPerfil {
    display: flex;
    align-items: center;
    height: 300px;
    border-bottom: 1px solid black;
    position: relative;
    justify-content: center;

    .capa {
      position: absolute;
      z-index: 0;
      object-fit: fill;
      height: 300px;
      width: 100%;
    }

    .perfil {
      margin-top: 297px;
      z-index: 1;
      width: 210px;
      height: 210px;
      background-color: #000;
      border-radius: 100%;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    width: 100%;

    .h2 {
      margin-top: 120px;
      font-style: normal;
      font-weight: 700;
      font-size: 27px;

      color: #000000;
    }

    .h1 {
      margin-top: 50px;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;

      color: #000000;
    }
    .userName {
      font-size: 30px;
      margin-bottom: 100px;
    }
  }
`;

export const StyledPostLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
`;
