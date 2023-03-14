import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #f8f9fa;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 100px;
    padding-left: 100px;

    h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 30px;

      color: #72098c;
    }

    a {
      display: flex;
      justify-content: center;
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;
      background-color: #72098c;
      border: 1px solid #72098c;
      width: 131px;

      color: #f8f9fa;

      @media (max-width: 540px) {
        display: none;
      }
    }
   
  }

  @media (max-width: 540px) {
    nav {
      justify-content: center;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;
