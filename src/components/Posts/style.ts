import styled from "styled-components";

export const StyledLisFollower = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  margin-bottom: 50px;

  @media (max-width: 665px) {
    padding: 0 10px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-top: 15px;
    line-height: 40px;
    color: #212529;
    margin-bottom: 20px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: #495057;
    line-height: 28px;
  }
`;
export const StyledDivFooterPost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  button {
    width: 92px;
    height: 38px;
    background-color: #72098c;
    color: #ffffff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    margin-right: 30px;
    transition: 0.5s;
  }
  button:hover {
    background-color: #b411dc;
  }
  div {
    display: flex;
    align-items: center;
  }
  div > img {
    cursor: pointer;
    margin-right: 8px;
  }
`;
