import styled from "styled-components";
import {mobile} from "../../style/responsive";

export const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0px 5px;

`
export const Title = styled.h2`
font-size: 50px;
margin-bottom: 10px;
`
export const Description = styled.p`
font-size: 18px;
font-weight: 300px;
margin-bottom: 10px;
${mobile({textAlign: "center"})}

`
export const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid lightgrey;
${mobile({width: "80%"})}
`
export const Input = styled.input`
height: 100%;
    border: none;
    outline: 1px solid lightslategray;
    flex: 8;
    padding-left: 14px;

    &::placeholder{
        ${mobile({fontSize: "12px"})}
    }
        `

export const Button = styled.button`
height: 100%;
    flex: 1;
    border: none;
    color: white;
    background-color: teal;
    ${mobile({flex: "2"})}
    cursor:pointer;
`