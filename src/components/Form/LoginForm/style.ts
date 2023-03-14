import styled from "styled-components";
import backgroundImg from "../../../assets/BackgroundImg.jpg";

export const StyledMainLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: calc(100vh - 61px);
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: url(${backgroundImg});
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  background: #ffffff;
  border-radius: 0px;
  padding: 0 20px;
  gap: 30px;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 30px;
    margin-bottom: 10px;

    color: #000;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    padding-bottom: 40px;
  }

  .enter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ad79de;

    border: 1.2182px solid #ad79de;
    border-radius: 0px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;

    color: #ffffff;

    :hover {
      background-color: #72098c;
    }
  }

  .divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.125rem;

      color: #000;
    }

    .goToRegister {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 100%;
      height: 48px;
      background: #000;

      border: 1.2182px solid #000;
      border-radius: 0px;
    }

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;

      color: #f8f9fa;
    }
  }
`;
