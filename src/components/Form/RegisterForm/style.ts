import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  padding: 0 10px;
  gap: 30px;

  width: 100%;
  max-width: 369px;

  border: 2px solid black;

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

  select {
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
    margin-bottom: 20px;

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
`;
