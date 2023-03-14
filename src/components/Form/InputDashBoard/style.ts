import styled from "styled-components";

export const StyledPostsForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 264px;
  position: relative;
  margin-top: 40px;
  input {
    height: 52px;
    outline-color: #72098c;
    border: 2px solid #dee2e6;
    padding-left: 15px;
    padding-right: 15px;
  }
  .textarea {
    height: 130px;
    margin-top: 26px;
    outline-color: #72098c;
    border: 2px solid #dee2e6;
  }
  button {
    width: 69px;
    height: 38px;
    border-radius: 4px;
    background-color: #72098c;
    color: #ffffff;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: 0.5s;
  }
  button:hover {
    background-color: #b411dc;
  }
`;
