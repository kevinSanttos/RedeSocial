import styled from "styled-components";

export const StyledDashboardDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  .conteudoPost {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 100%;
    max-width: 400px;
    height: 300px;
    h2 {
      font-size: 28px;
      font-weight: 700;
      margin-top: 15px;
      line-height: 40px;
      color: rgb(33, 37, 41);
      padding-left: 10px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: rgb(73, 80, 87);
      line-height: 28px;
      padding-left: 10px;
    }
  }

  .comentarios {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 100%;
    max-width: 400px;
    height: 300px;

    input {
      border: 3px solid black;
    }
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 10px;

  button {
    background-color: blue;
    color: white;
  }
`;

export const StyledComments = styled.li`
  display: flex;
`;
