import styled from "styled-components";

const Container = styled.div`
  height:30px;
  background-color: #008080;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
      Super Deal! Free Shipping on orders over $100
    </Container>
  )
}

export default Announcement;