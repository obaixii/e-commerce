import styled from "styled-components";

export const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  transition: all .4s ease;
  
  &:hover{
    opacity:1;
  }
`
export const Container = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f0f0f0;
`
export const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  /* inset: 0 50; */
`
export const Image = styled.img`
  /* max-width: 100%; */
  height: 75%;
  z-index: 2;
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
  transition: all .3s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`