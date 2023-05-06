import { Container, Wrapper, Title, Top, TopButton, TopTexts, TopText, Bottom, Info, Product, PriceDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, ProductDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button, } from "./styled"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {
  return (
    <Container>
      <Wrapper>
        {/******* Product Title's Panel of Cart Component *******/}
        <Title>Your Bag</Title>

        {/******* Action Panel of Cart Component *******/}
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        {/******* Product Items Panel of Cart Component *******/}
        <Bottom>
          <Info>
            <Product>
              {/******* Product Detail Panel of Cart Component *******/}
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName><b>Product Title:</b> Product Name</ProductName>
                  <ProductId><b>Product Id:</b>232432535223</ProductId>
                  <ProductColor color="242424" />
                  <ProductSize><b>Product Size:</b> 41.5</ProductSize>
                </Details>
              </ProductDetail>
              {/******* Product Price Panel of Cart Component *******/}
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$40</ProductPrice>
              </PriceDetail>
            </Product>
            {/******* Product Line Breaker of Cart Component *******/}
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName><b>Product Title:</b> Product Name</ProductName>
                  <ProductId><b>Product Id:</b>232432535223</ProductId>
                  <ProductColor color="242424" />
                  <ProductSize><b>Product Size:</b> 41.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          {/******* Summary Panel of Cart Component *******/}
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 4.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ 99</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart