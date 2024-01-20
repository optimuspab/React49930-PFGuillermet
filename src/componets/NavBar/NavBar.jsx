import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const brandStyle = {
    alignSelf: 'center',
};

const NavBar = () => {

    const toggleMenu = () => {
        const menu = document.getElementById('navbar').getElementsByTagName('ul')[0];
        menu.classList.toggle('show');
    };

    return (
        <div id="navbar">
            <Link to="/" className="navbar-brand" style={brandStyle}>
                <img src="/tt_logo_white.png" alt="Trendy Tech Logo" className="logo"></img>
            </Link>
            <div id="menu-icon" onClick={toggleMenu}>&#9776;</div>
            <ul>
                <li>
                    <Link to="/categorias/smartphones">Smartphones</Link>
                </li>
                <li>
                    <Link to="/categorias/laptops">Laptops</Link>
                </li>
                <li>
                    <Link to="/categorias/fragrances">Fragancias</Link>
                </li>
                <li>
                    <Link to="/categorias/skincare">Cuidado de la piel</Link>
                </li>
                <li>
                    <Link to="/categorias/groceries">Comestibles</Link>
                </li>
                <li>
                    <Link to="/categorias/home-decoration">Decoración</Link>
                </li>
            </ul>
            <div id="cart-widget">
                <a className="active" href="#contact"><CartWidget /></a>
            </div>
        </div>
    )
}

export default NavBar