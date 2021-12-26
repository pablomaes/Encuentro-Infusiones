import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import { Wrapper, MenuItem, Left, Center, Right } from '../styledComponents';
import logo from "./Logo.png";
import "./Navbar.css"
const NavBar = () => {
    return (
        <header className="encabezado">
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to={"/"}><img src={ logo } className="navbar__header__logo" alt="Logo"></img></Link>
                    
                </Left>
                <Center>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><MenuItem>PRODUCTOS</MenuItem></Link>
                    <Link to='/category/articulo' style={{textDecoration: "none", color: "white"}}><MenuItem>UTENSILLOS</MenuItem></Link>
                    <Link to='/category/combos' style={{textDecoration: "none", color: "white"}}><MenuItem>COMBOS</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
        </header>
    );
}

export default NavBar;


//import React from "react";
//import { Link } from "react-router-dom";
//import CartWidget from "../CartWidget"
//import logo from "./Logo.png";
//import "./Navbar.css"
//const NavBar = () => {
//
//    return (
//        <header className="encabezado">
//            
//            <Link to={"/"}><img src={ logo } className="navbar__header__logo" alt="Logo"></img></Link>
//
//            <nav>
//                <Link className="mx-1" to={"/"}>Inicio</Link>
//                <Link className="mx-1" to={"/category/articulo"}>Utensillos</Link>
//                <Link className="mx-1" to={"/category/combos"}>Combos</Link>
//                
//            </nav>
//
//            <CartWidget/>
//
//        </header>
//    )
//}
//
//export default NavBar;