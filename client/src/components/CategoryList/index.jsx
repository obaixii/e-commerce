import { NewsLetter, Products } from "../index"
import { Container, Wrapper, Title, FilterContainer, Filter, FilterText, Select, Options } from "./styled"


function CategoryList() {
  return (
    <Container>
      <Wrapper>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products: </FilterText>
            <Select>
              <Options disabled selected>Color</Options>
              <Options>White</Options>
              <Options>Black</Options>
              <Options>Red</Options>
              <Options>Blue</Options>
              <Options>Yellow</Options>
              <Options>Green</Options>
              <Options>Pink</Options>
            </Select>
            <Select>
              <Options disabled selected>Size</Options>
              <Options>XS</Options>
              <Options>S</Options>
              <Options>M</Options>
              <Options>L</Options>
              <Options>XL</Options>
              <Options>XXL</Options>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products: </FilterText>
            <Select>
              <Options selected>Newest</Options>
              <Options>Price - (asc)</Options>
              <Options>Price - (desc)</Options>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
      </Wrapper>
    </Container>
  )
}

export default CategoryList;