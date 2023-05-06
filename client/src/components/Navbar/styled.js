import styled from 'styled-components';
import { mobile, mobileLg } from "../../style/responsive";

export const Container = styled.div`
    height : 60px;
    transition: all .3s ease;
    ${mobile({ height: "40px" })}
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding :10px 20px;
    ${mobile({ padding: "8px 0px" })}

`
/* Left Elements of Navbar */
export const Left = styled.div`
    display: flex;
    align-items: center;
    flex:1;    
`
export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    ${mobileLg({ display: "none" })}
`
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    ${mobileLg({ marginLeft: "5px", border: "none" })}
`
export const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    max-width: 50%;
    ${mobileLg({ display: "none" })}
`
/* Center Elements of Navbar */
export const Center = styled.div`
    flex:1;
    text-align: center;
`
export const Logo = styled.h2`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

/* Right Elements of Navbar */
export const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
    flex:1;
    text-align: center;
    ${mobile({
    flex: "1",
    justifyContent: "center"
})}
`
export const MenuItems = styled.div`
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;


    ${mobileLg({
    display: props => props.type === 'form' && 'none',
})}
    ${mobile({
    fontSize: "8px",
    marginLeft: "10px"
})}

`