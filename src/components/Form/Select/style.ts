import styled from "styled-components";

export const StyledSelect = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  border: none;

  label {
    font-style: normal;
    font-weight: 700;
    line-height: 0rem;

    color: #000;
  }

  select {
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #fff;

    border: 3px solid #000;
    border-radius: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #000;
  }

  p {
    color: #e83f5b;
  }
`;
