import styled from "styled-components";

export const StyledAvatar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    img{
        height: 65px;
        width: 65px;
        border-radius: 50%;
    }
    h3{
        color: #212529;
        font-size: 25px;
        font-weight: bold;
    }
    p{
        color: #495057;
        font-size: 20px;
    }
`;