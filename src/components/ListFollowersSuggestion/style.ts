import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin-top: 30px;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    width: 100%;
    min-width: 250px;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    display: flex;
    gap: 10px;
    overflow-x: scroll;
  }
`;
export const StyledButtonFollow = styled.button`
  border: 2px solid #72098c;
  background-color: #72098c;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  padding: 5px;
  font-weight: 600;
`;

export const StyledButtonFollowing = styled.button`
  border: 2px solid #72098c;
  background-color: #ffffff;
  color: #72098c;
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  padding: 5px;
  font-weight: 700;
`;
