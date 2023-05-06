import styled from "styled-components";
import { tablet} from "../../style/responsive";

export const Container = styled.div``

export const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-wrap: wrap;
${tablet({
  padding: "10px"
})}
`
export const ImgContainer = styled.div`
flex: 1;
${tablet({ height: "100%", flex:"2 1 50%" })}
`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

${tablet({
  height: "100%"
})}

`
export const InfoContainer = styled.div`
flex: 1;

`
export const Title = styled.h2`
font-weight: 200;
`
export const Description = styled.p`
margin: 20px 0px;
`
export const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

export const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 50px 0px;

${tablet({ width: "100%",margin:"15px 0px" })}
`
export const Filter = styled.div`
display: flex;
align-items: center;
`
export const FilterTitle = styled.h4`
font-size: 20px;
font-weight: 200;
`

export const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 10px;
background-color: ${(props => props.color)};
cursor: pointer;
`

export const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
export const SizeOption = styled.option``

export const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items:center ;

${tablet({ width: "100%" })}
`
export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 0px 5px;
`
export const Button = styled.button`
padding: 10px;
color: #ffffff;
background-color: #008080;
border: 1px solid lightgray;
outline: none;
cursor: pointer;
transition: all .5s ease;

&:hover{
   background-color: #126363;
 }
`