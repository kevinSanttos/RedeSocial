import styled from "styled-components";
import CapaImg from "../../assets/CapaImg.jpg"

export const Main = styled.main`
    background-color: #D3D0D0;
    width: 100%;
    height: 100vh;

    .fotoCapa{
        width: 100%;
        background: url(${CapaImg});
        height: 300px;
        border-bottom: 1px solid black;
    }
    .fotoPerfil{    
        border: 1px solid black;
        height: 250px;
        width: 250px;
        position: absolute;
        border-radius: 50%;
        left: 620px;
        top: 250px;
    }
    .container{
        background-color: white;
        border-left: 1px solid black;
        border-right: 1px solid black;
        height: 100vh;
        width: 60%;
        margin-left: 20%;
    }

`
