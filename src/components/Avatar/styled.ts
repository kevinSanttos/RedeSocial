import styled from "styled-components";

export const StyledAvatar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    img{
        height: 52px;
        width: 52px;
        border-radius: 50%;
        object-fit: cover;
    }
    h3{
        color: #212529;
        font-size: 20px;
        font-weight: bold;
    }
    p{
        color: #495057;
        font-size: 14px;
    }
`;