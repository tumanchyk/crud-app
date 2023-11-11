import { Link } from "react-router-dom";
import {useContext} from 'react';
import { Context } from '../App';
import { HeaderEl, Logo, LogoutBtn } from "./Header.styled";
import logo from "../../imgs/world.png";

const Header = () => {
    const { setIsLoggedIn } = useContext(Context);
    return <HeaderEl>
        <Link to="/">
            <Logo src={logo} alt="logo" />
        </Link>
        <LogoutBtn onClick={() => setIsLoggedIn(false)}>Logout</LogoutBtn>
    </HeaderEl>
}

export default Header;