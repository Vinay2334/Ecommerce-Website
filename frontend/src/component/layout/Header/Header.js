import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";

const Header = () => {
  return <ReactNavbar
  ProfileIconElement= {FaUserAlt}
  profileIcon= {true}
  searchIcon={true}
  SearchIconElement = {AiOutlineSearch}
  cartIcon= {true}
  CartIconElement = {FiShoppingCart}
  burgerColorHover= "#eb4034"
  logo = {logo}
  logoWidth= "20vmax"
  navColor1= "white"
  logoHoverSize= "10px"
  logoHoverColor= "#eb4034"
  link1Text= "Home"
  link2Text= "Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "1.3vmax"
  link1Color= "grey"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#eb4034"
  link1Margin= "1vmax"
  profileIconUrl= "/login"
  profileIconColor= "rgba(35 35 350.8)"
  searchIconColor= "grey"
  cartIconColor= "grey"
  profileIconColorHover= "#eb4034"
  searchIconColorHover= "#eb4034"
  cartIconColorHover= "#eb4034"
  cartIconMargin= "1vmax"
  />;
};

export default Header;
