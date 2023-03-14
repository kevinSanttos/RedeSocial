import styled from "styled-components";

export const StyledInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  border: none;

  position: relative;

  label {
    font-style: normal;
    font-weight: 700;
    line-height: 0rem;

    color: #000;
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

    border: 3px solid #000;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #000;
  }

  p {
    color: #e83f5b;
  }

  button {
    background: none;
    border: none;
    position: absolute;
    top: 20px;
    right: -10px;
    width: 80px;

    :hover {
      background: none;
      border: none;
    }
  }
`;
