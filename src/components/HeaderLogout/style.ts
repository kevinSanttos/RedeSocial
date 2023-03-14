import styled from "styled-components";

export const StyledHeaderLogout = styled.header`
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #72098c;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 2;
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

      color: #f8f9fa;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 40px;
      align-items: center;
    }
    a {
      border: 2px solid #f8f9fa;
      color: #f8f9fa;
      padding: 5px;
      font-size: 14px;
      transition: 0.5s;
      border-radius: 4px;
    }
    a:hover {
      color: #72098c;
      background-color: #f8f9fa;
    }
    button {
      color: #f8f9fa;
      font-size: 20px;
    }
  }

  @media (max-width: 540px) {
    nav {
      justify-content: center;
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  @media (max-width: 665px) {
    nav {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
