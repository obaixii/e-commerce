import { AddContainer, Amount, AmountContainer, Button, Container, Description, Filter, FilterColor, FilterContainer, FilterSize, FilterTitle, Image, ImgContainer, InfoContainer, Price, SizeOption, Title, Wrapper } from "./styled";
// import { products } from "../../data/data";
// import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function ProductDetail() {
  // const { id } = useParams();
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product Title Here</Title>
          <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam non ad illum architecto consequatur esse, illo, corrupti sunt officiis sequi voluptate repudiandae, eius totam.</Description>
          <Price>$49</Price>

          <FilterContainer>
            {/* Filter By Color */}
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            {/* Filter By Size */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <SizeOption>XS</SizeOption>
                <SizeOption>S</SizeOption>
                <SizeOption>M</SizeOption>
                <SizeOption>L</SizeOption>
                <SizeOption>XL</SizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>{1}</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default ProductDetail