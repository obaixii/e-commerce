import { useState } from "react";
import { Arrow, Button, Container, Description, Image,ImageButton, ImageContainer, InfoContainer, Slide, Title, Wrapper } from "./styled"
import { sliderItems } from "../../data/data";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <NavigateBeforeOutlinedIcon />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {
                        sliderItems.map((slide, index) => {
                            return (
                                <Slide key={index} bg={slide.bg}>
                                    <ImageContainer>
                                        <Image src={slide.img} />
                                        <ImageButton>SHOP NOW</ImageButton>
                                    </ImageContainer>
                                    <InfoContainer>
                                        <Title>{slide.title}</Title>
                                        <Description>{slide.description}</Description>
                                        <Button>Shop Now</Button>
                                    </InfoContainer>
                                </Slide>
                            )
                        })
                    }

                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <NavigateNextOutlinedIcon />
                </Arrow>
            </Container>
    )
}

export default Slider;