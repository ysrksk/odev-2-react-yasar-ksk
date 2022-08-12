import styled from "styled-components";

export const Tables = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

export const Tr = styled.tr`
    &:nth-child(even){background-color: #f2f2f2;}
    &:hover {background-color: #ddd;}
`;

export const Button = styled.button`
    background-color: 	#004D40;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
    &:hover {
      background-color: 	#80CBC4;
    }
`;


export const Input = styled.input`
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: center;
    width: 40%;
    background: #f1f1f1;
    margin-bottom: 20px;
    border-radius: 10px;
`;


export const Select = styled.select`
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: center;
    width: 10%;
    background: #f1f1f1;
    margin-bottom: 20px;
    border-radius: 10px;
    Margin-left: 10px;
`;

export const B = styled.b`
    margin-left: 10px;
    font-size: 17px;
`;
