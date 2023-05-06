import styled from 'styled-components';
import { mobile,mobileLg,tablet } from "../../style/responsive";

export const Container = styled.div`
    height: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${mobileLg({ flexDirection: "column" })}
    ${mobile({ flexDirection: "column" })}

    & > div{
        ${tablet({ flex: "1 1 100%" })}
    }
`

// Left Elements of Footer
export const Left = styled.div`
display: flex;
flex: 1;
flex-direction: column;
padding: 10px;
`
export const Logo = styled.h2`
font-weight: bold;
`
export const Description = styled.p`
margin: 10px 0px;
`
export const SocialContainer = styled.div`
display: flex;
`
export const SocialIcon = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: #008080;
background-color: #ffffff;
border-radius: 50%;
cursor: pointer;
transition: all .5s ease;
margin-right: 10px;
border: 0.5px solid lightgray;

a > svg{
    transition: all .5s ease;
}
&:hover {
    background-color: #008080;
    color: #ffffff;
    
    /* Add a nested selector to target the icon inside the Link component */
    a {
      color: #ffffff;
    }
  }

`

// Center Elements of Footer
export const Center = styled.div`
 flex: 1;
padding: 10px;
`
export const Title = styled.h2`
    margin-bottom: 20px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
`
export const ListItem = styled.li`
    width: 50%;
`
// Right Elements of Footer
export const Right = styled.div`
 flex: 1;
padding: 10px;
${mobile({ backgroundColor: "#eee" })}

`
export const ContactItem = styled.div`
display: flex;
/* align-items: start; */
margin-bottom: 20px;


`
export const Payments = styled.img`
width: 50%;
`