import styled from "styled-components";
import CapaImg from "../../assets/CapaImg.jpg"

export const Main = styled.main`
    background-color: gray;
    width: 100%;
    height: 100%;

    .fotoCapa{
        width: 60%;
        margin-left: 20%;
        background: url(${CapaImg});
        height: 300px;
        border-bottom: 1px solid black;
    }
    .fotoPerfil{    
        border: 1px solid black;
        width: 250px;
        height: 250px;
        position: absolute;
        border-radius: 50%;
        left: 42%;
        background-color: gray;
        top: 250px;
    }
    .container{
        background-color: white;
        
        height: 100vh;
        width: 60%;
        margin-left: 20%;
    }

`
