import { useState } from "react";
import {Circle, Container, Icon, Image, Info} from "./styled"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorderOutlined';

function ProductCard({ product }) {
  const [fav, setFavorite] = useState(false)
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          {
            fav === false ? <FavoriteBorder /> : <FavoriteIcon style={{ color: "#ff0000" }} />
          }
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductCard