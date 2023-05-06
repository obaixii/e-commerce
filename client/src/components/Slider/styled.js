import styled from "styled-components"
import { mobile, tablet } from "../../style/responsive"
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({ display: "none" })}
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff7f7;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
  z-index: 2;
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);

`
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${(props) => props.bg};
   position: relative;
`
export const ImageContainer = styled.div`
height: 100%;
display: flex;
justify-content: center;
   flex: 1;
   position: relative;
`
export const Image = styled.img`
    height: 80%;
`
export const ImageButton = styled.button`
display: none;
transition: all .4s ease;
&:hover{

}
${tablet({
    display: "block",
    position: "absolute",
    top: "50%",
    padding: "10px",
    fontStyle: "20px",
    fontWeight: "500",
    color:"#474747",
    backgroundColor: "rgba(237,237,237,0.7)",
    border: "2px solid rgb(169 169 169)",
    cursor: "pointer",
})}

`
export const InfoContainer = styled.div`
      flex: 1;
      padding: 50px;
      ${tablet({
    display: "none",
})}
`
export const Title = styled.h1`
font-size:70px;
`
export const Description = styled.p`
    padding: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing:3px;
`
export const Button = styled.button`
    padding: 10px;
    font-style: 20px;
    font-weight: 500;
    background-color: #36d3d3;
    border: 2px solid #0d8787;;
    cursor: pointer;
`