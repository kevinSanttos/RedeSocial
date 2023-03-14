import styled from "styled-components";
import backgroundImg from "../../../assets/BackgroundImg.jpg";

export const StyledMainRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: url(${backgroundImg});
`;

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 30px;

  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 0px;
  padding: 0 20px;
  gap: 30px;

  .backToLogin {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 10px;
    align-items: center;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;

      color: #000;
    }

    a {
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.125rem;

      color: #000;
      border-bottom: 1px solid #000;
    }
  }

  .registerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-bottom: 40px;

    width: 100%;
    height: 48px;

    background: #ad79de;

    border: 1px solid #ad79de;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #ffffff;

    :hover {
      background-color: #72098c;
    }
  }
`;
