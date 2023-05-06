import styled from "styled-components"
import { mobile, tablet } from "../../style/responsive"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
width:45% ;
padding: 20px;
background-color: #ffffff;
${tablet({ width: "75%" })}
${mobile({ width: "75%" })}
`
export const Title = styled.h1`
/* text-align: center; */
font-size: 24px;
font-weight: 300;
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
`
export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
${mobile({ margin: "5px 0px", padding: "8px 5px" })}
`
export const Agreement = styled.span`
font-size: 12px;
margin-top: 20px;
`
export const Button = styled.button`
width: 40%;
border: none;
padding: 10px;
margin: 10px 0;
color: #ffffff;
background-color: #008080;
cursor: pointer;
`

export const Alt = styled.p`
  font-weight: 400;
  font-style: italic;

  a{
    font-weight: 600;
    font-style: normal;
    color: #008080;
  }
`