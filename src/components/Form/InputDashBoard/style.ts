import styled from "styled-components";

export const StyledInput = styled.form`
    display: flex;
    flex-direction: column;
    height: 264px;
    position: relative;
    margin-top: 40px;
    input{
        height: 52px;
        outline-color: #72098C;
        border:2px solid #DEE2E6;

    }
    textarea{
        height: 130px;
        margin-top: 26px;
        outline-color: #72098C;
        border:2px solid #DEE2E6;
        resize: none;
    }
    button{
        width: 69px;
        height: 38px;
        border-radius: 4px;
        background-color: #72098C;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
        transition: 0.5s;
    }
    button:hover{
        background-color:#B411DC
    }
`;