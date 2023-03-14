import styled from "styled-components";

export const StyledDashboardDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  .conteudoPost {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 100%;
    max-width: 400px;
    height: 300px;
    border-radius: 4px;
    h2 {
      font-size: 20px;
      font-weight: 700;
      line-height: 40px;
      color: rgb(33, 37, 41);
      padding-left: 10px;
      margin-top: -50px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: rgb(73, 80, 87);
      line-height: 28px;
      padding-left: 10px;
      height: 200px;
      overflow-y: scroll;
    }
    button{
      display: flex;
      flex-direction: row-reverse;
      font-size: 20px;
      margin-right: 10px;
      cursor: pointer;
      z-index: 2;
    }
  }

  .comentarios {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    width: 70%;
    max-width: 400px;
    height: 300px;
    padding-right: 40px;
    input {
      border: 2px solid #72098C ;
      border-radius: 4px;
      margin-left: 20px;
      width: 70%;
    }
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 10px;
  position: relative;
  button {
    background-color:#72098C ;
    color: white;
    border-radius: 4px;
    width: 20%;
    height: 30px;
    position: absolute;
    right: -3px;
    top:10px
  }
`;

export const StyledUlComments = styled.ul`
  height: 190px;
  overflow-y: scroll;
  margin-top: 20px;
  border: 2px solid #72098C ;
  border-radius: 4px;
  margin-left: 20px;
  width: 100%;
`;

export const StyledComments = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  overflow: none;
  div{
    flex-wrap: wrap;
  overflow: none;
    display: block;
    flex-direction: column;
    
  }
  h3{
    font-weight:  bold;
    margin-left: 15px;
    margin-right: 15px;
  }
  p{
    margin-left: 12px;
  }
  button{
    color: red;
    margin-right: 15px;
  }
`;
