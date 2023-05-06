import SendIcon from '@mui/icons-material/Send';
import { Button, Container, Description, Input, InputContainer, Title } from "./styled";

function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Enter Your Email to get Updates" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter;