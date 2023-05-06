import styled from "styled-components"
import { mobile, tablet } from "../../style/responsive";

export const Container = styled.div``
export const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`
// Product Title's Component
export const Title = styled.h1`
font-weight: 300;
text-align: center;
`

// Action Panel Component
export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
flex-wrap: wrap;

${mobile({ padding: "10px", margin: "10px 0px" })}
`
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: #008080;
  color: #ffffff;

  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" && "#343434"};
  color: ${props => props.type === "filled" && "white"};

  transition: all .3s ease;
  &:hover{
    background-color:#009e9e;
  }
  &:hover{
    background-color:${props => props.type === "filled" && "#454444"};
  }

  ${tablet({
  order: "2",
})}
`
export const TopTexts = styled.div`
${tablet({
  flex:"1 1 100%",
  order: "1",
  textAlign:"center",
  margin:"10px 0px"
})}
${mobile({ display: "none" })}
`
export const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`
// Product Items Component
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${tablet({ flexDirection: "column" })}
`
export const Info = styled.div`
flex: 3;
`

// Product Component
export const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({
  flexDirection: "column"
})}
`

// Product Detail Component
export const ProductDetail = styled.div`
flex: 2;
display: flex;
`
export const Image = styled.img`
width: 200px;
${mobile({
  width: "100px",

})}
`
export const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({
  padding: "10px",
})}
`

export const ProductName = styled.span``

export const ProductId = styled.span``

export const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #${props => props.color};
`

export const ProductSize = styled.span``

// Product Price Component
export const PriceDetail = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
${mobile({
  flexDirection: "row",
  justifyContent: "space-between",
})}
`
export const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
export const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
`

//  Product Line Breaker Component
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

//  Summary Component
export const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
/* height: 50vh; */
`

export const SummaryTitle = styled.h2`
font-weight:300;
`
export const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;

font-size: ${props => props.type === "total" && "24px"};
font-weight: ${props => props.type === "total" && "500"};
border: ${props => props.type === "total" && "1px solid lightgray"};
border-radius: ${props => props.type === "total" && "10px"};
padding: ${props => props.type === "total" && "10px"};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #008080;
border: 1px solid transparent;
color:#ffffff;
cursor: pointer;
outline:none;
transition: all .5s ease;

&:hover{
  background-color: #029b9b;
}
`