import styled from "styled-components"
import { mobile,tablet } from "../../style/responsive"

export const Button = styled.button`
    opacity: 0;
    visibility: hidden;
    border: none;
    outline: none;
    padding: 10px;
    background-color: #ffffff;
    color: grey;
    cursor: pointer;
    font-weight: 700;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    ${mobile({
        opacity: "1",
        visibility: "visible",
        marginTop:"5px",
        padding:"5px",
        })}

`

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    transition: all 5s ease;

    &:hover ${Button} {
        opacity: 1;
        visibility: visible;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"50vh"})}
    ${tablet({height:"30vh"})}
`
export const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 5px; */
    background-color: rgba(141,141,141,0.33);
`
export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    ${mobile({fontSize: "18px"})}
`
