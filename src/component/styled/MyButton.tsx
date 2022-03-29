import styled from 'styled-components'

export const MyButton = styled.button`
    background-color: #ff1cff;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;

export const Container = styled.div`
    position:relative;
    display:block;
`;

export const Content = styled.div`
    display:block;
    position:ablolute;
    background-color:#f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
     z-index: 1;
`;

export const content_p = styled.div(Content)