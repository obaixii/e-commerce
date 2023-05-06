import { Link } from "react-router-dom";
import { Center, Container, Input, Language, Left, Logo, MenuItems, Right, SearchContainer, Wrapper } from "./styled";
import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
    return (
        <Container>
            <Wrapper>
                {/* Left Elements of Navbar */}
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>

                {/* Center Elements of Navbar */}
                <Center>
                    <Link to="/">
                        <Logo>DevxDes</Logo>
                    </Link>
                </Center>

                {/* Right Elements of Navbar */}
                <Right>
                    <MenuItems type="form">
                        <Link to="/register">Register</Link>
                    </MenuItems>
                    <MenuItems type="form">
                        <Link to="/login">Sign in</Link>
                    </MenuItems>
                    <MenuItems >
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;