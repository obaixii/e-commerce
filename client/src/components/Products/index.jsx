import styled from "styled-components";
import { products } from "../../data/data";
import ProductCard from "../ProductCard";
import { mobile } from "../../style/responsive";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    /* ${mobile({
        padding: "0",
        })} */
`;

function Products() {
    return (
        <Container>
            {
                products.map((product, index) => <ProductCard product={product} key={index} />)
            }
        </Container>
    )
}

export default Products;