import { Link } from "react-router-dom"
import { Center, ContactItem, Container, Description, Left, List, ListItem, Logo, Payments, Right, SocialContainer, SocialIcon, Title, Wrapper } from "./styled"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
    return (
        <Container>
            <Wrapper>
                {/* Left Elements of Footer */}
                <Left>
                    <Link to="/"><Logo>DevxDes</Logo></Link>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum eum error! Dolorem, eius!
                    </Description>
                    <SocialContainer>
                        <SocialIcon>
                            <Link to="https://www.facebook.com/obaixii/" target="blank">
                                <FacebookIcon />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <Link to="https://www.instagram.com/obaixii/" target="blank">
                                <InstagramIcon />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <Link to="https://www.youtube.com/@obaixii" target="blank">
                                <YouTubeIcon />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <Link to="https://github.com/obaixii" target="blank">
                                <GitHubIcon />
                            </Link>
                        </SocialIcon>
                        <SocialIcon>
                            <Link to="https://www.linkedin.com/in/obaixii/" target="blank">
                                <LinkedInIcon />
                            </Link>
                        </SocialIcon>
                    </SocialContainer>
                </Left>

                {/* Center Elements of Footer */}
                <Center>
                    <Title>Explore More!</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Women Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>Popular</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>

                {/* Right Elements of Footer */}
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <HomeIcon style={{ marginRight: "10px" }} /> 321 Street Path, Rwp 46000
                    </ContactItem>
                    <ContactItem>
                        <LocalPhoneIcon style={{ marginRight: "10px" }} />
                        +92 132 434 8971
                    </ContactItem>
                    <ContactItem>
                        <MailIcon style={{ marginRight: "10px" }} />
                        contact@obaixii
                    </ContactItem>
                    <Payments src='https://i.ibb.co/Qfvn4z6/payment.png' />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer;