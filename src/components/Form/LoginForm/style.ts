import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  padding-bottom: 30px;
  padding-top: 30px;

  width: 100%;
  max-width: 369px;

  background: #ffffff;
  border: 2px solid #000000;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 0.625rem;

    color: #000000;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.5rem;

    color: #000000;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ffffff;

    border: 3px solid #000000;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #000000;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-top: 10px;

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
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    margin-top: 5px;

    width: 100%;
    height: 48px;

    background: #000000;

    border: 1px solid #000000;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #ffffff;
  }
`;
