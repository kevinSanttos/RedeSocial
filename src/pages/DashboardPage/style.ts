import styled from "styled-components";

export const StyledConteiner = styled.div`
    width: 70vw;
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    gap: 40px;
    h1{
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 52px;
        color: #212529;
    }
    @media(max-width:1200px) {
        flex-direction: column;
        width: 100vw;
        align-items: center;
    }
`;

export const StyledDivConteiner = styled.div`
    width: 60%;
`;

export const StyledSuggestionConteiner= styled.div`
    width: 40%;

    @media(max-width: 800px){
        width: 90%;
        margin: 0 auto;
    }
  
  
`;

export const StyledDivSuggestionConteiner= styled.div`
    border: 2px solid #72098C;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: sticky;
    top:90px;
   
   
    h2{
        margin: 20px auto 0 auto;
        font-size: 23px;
        font-weight: bold;
    }

    @media(max-width: 800px){
        width: 100%;
        display: flex;
        overflow: auto;
       
    }
`;