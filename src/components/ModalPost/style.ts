import styled from "styled-components";

export const StyledDashboardDiv = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 1;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  .realContainer {
    display: flex;
    width: 100%;
    width: 1000px;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 665px) {
      flex-direction: column;
    }
  }

  .conteudoPost {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 100%;
    border-radius: 0px;
    h2 {
      font-size: 20px;
      font-weight: 700;
      color: rgb(33, 37, 41);
      padding-left: 10px;
      margin-top: -50px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: rgb(73, 80, 87);
      line-height: 28px;
      padding-left: 10px;
      height: 200px;
      overflow-y: scroll;
    }
    button {
      display: flex;
      flex-direction: row-reverse;
      font-size: 20px;
      margin-right: 10px;
      cursor: pointer;
      z-index: 2;
    }
  }

  .comentarios {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 100%;
    height: 400px;
    padding: 0 10px;
    input {
      border: 2px solid #72098c;
      border-radius: 4px;
      width: 100%;
    }
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding-bottom: 10px;
  button {
    background-color: #72098c;
    color: white;
    border-radius: 4px;
    width: 20%;
    height: 30px;
    position: absolute;
    right: 8px;
    top: 10px;
  }
`;

export const StyledUlComments = styled.ul`
  min-height: 300px;
  overflow-y: scroll;
  margin-top: 20px;
  border: 2px solid #72098c;
  border-radius: 4px;
  width: 100%;
`;

export const StyledComments = styled.li`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
  }
  p {
    margin: 10px;
  }
  button {
    color: red;
    margin-right: 15px;
  }
`;
