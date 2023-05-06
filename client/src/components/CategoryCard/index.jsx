import { Button, Container, Image, Info, Title } from "./styled";

function CategoryCard({ category }) {
    return (
        <Container>
            <Image src={category.img} />
            <Info>
                <Title>{category.title}</Title>
                <Button>Shop Now!</Button>
            </Info>
        </Container>
    )
}

export default CategoryCard;