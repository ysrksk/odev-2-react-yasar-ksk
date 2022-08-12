import styled from "styled-components";



export const Form = styled.div`
    border: 3px solid black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 36px;
    margin: auto;
    margin-top: 35px;
    width: 350px;
`;

export const InputText = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

export const Button = styled.button`
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    &:hover {
      opacity: 0.8;
`;