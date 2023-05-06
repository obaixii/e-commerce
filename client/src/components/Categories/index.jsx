import styled from "styled-components";
import { categories } from "../../data/data";
import CategoryCard from "../CategoryCard";
import { mobile, tablet } from "../../style/responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${tablet({
        padding:"0",
        flexDirection:"column",
        })}
    ${mobile({
        padding:"0",
        flexDirection:"column"
        })}

`;

function Categories() {
    return (
        <Container>
            {
                categories.map((category, index) => <CategoryCard category={category} key={index} />)
            }
        </Container>
    )
}

export default Categories;