import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { HeaderEl, Logo } from "./Header.styled";
import logo from "../../imgs/world.png"

const Header = () => {
    return <HeaderEl>
        <Link to="/">
            <Logo src={logo} alt="logo" />
        </Link>
        <Button>Logout</Button>
  </HeaderEl>
}

export default Header;