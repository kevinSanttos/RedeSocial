import styled from "styled-components";

export const Main = styled.main`
    background-color: gray;
    width: 100%;
    height: 100%;

    .fotoCapa{
        width: 60%;
        margin-left: 20%;
        height: 300px;
        border-bottom: 1px solid black;
        
        img{
            object-fit: cover;
            height: 300px;
            width: 100%;
            
        }
    }
    .fotoPerfil{    
        border: 1px solid black;
        width: 20vw;
        height: 250px;
        position: absolute;
        border-radius: 50%;
        left: 42%;
        background-color: gray;
        top: 250px;
        img{
            border-radius: 50%;
            object-fit: cover;
            width: 20vw;
            height: 250px;
        }
        @media(max-width:1000px) {
            height: 200px;
        img{
            height: 200px;
        }
    }
    @media(max-width:800px) {
            height: 150px;
        img{
            height:150px;
        }
    }
    
    }
    .container{
        background-color: white;
        height: 100%;
        width: 60%;
        margin-left: 20%;
        padding-top: 200px;
        padding-left: 20px;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        .userName{
            font-size: 30px;
            margin-bottom: 100px;
           
        }
    }
`
