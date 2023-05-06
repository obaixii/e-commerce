import styled from "styled-components";
import { mobile } from "../../style/responsive";

export const Container = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column
;
`
export const Title = styled.h1`
text-align: center;
margin: 2opx;
`
export const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const Filter = styled.div`
margin: 20px;
${mobile({
  margin: "0px 10px",
  display: "flex",
  flexDirection: "column"

})}
`
export const FilterText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`

export const Select = styled.select`
font-size: 16px;
  padding: 6px;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid lightgray;
  background-color: #008080;
color: #ffffff;

  &:disabled{
color: #ffffff;
  }
  ${mobile({ margin: "5px 0px" })}
`
export const Options = styled.option`
background-color: #008080;
color: #ffffff;
`
