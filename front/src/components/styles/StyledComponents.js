import styled from 'styled-components';

export const SubHead = styled.p`
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    border: 0.2px solid black;
    margin: 0;
    padding: 10px 0;
    font-weight: bold;
    font-family: 'Fascinate', cursive;
    letter-spacing: 0.6px;
    background-color: #E3C4A8;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0 ;
`;

export const ButtonS1 = styled.button`
    background-color: hsl(340 100% 32%);
    border: none;
    border-radius: 2px;
    outline: none;
    height: 40px;
    width: 120px;
    outline-offset: 4px;
    color: white;

    & span{
        border-radius: 2px;
        width: 85%;
        display: block;
        padding: 12px;
        font-weight: bold;
        background-color: hsl(345 100% 47%);
        transform: translateY(-6px);
    }
`;