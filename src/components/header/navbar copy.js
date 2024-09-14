import React, { useState, useContext } from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../logo";
import MenuItem from "../menuItem";
import SideCartBar from "../sideCartBar";
import SearchIcon from "../../icons/searchicon";
import Profile from "../../icons/profile";
import CartIcon from "../../icons/cart";
import HumbergerIcon from "../../icons/humbergerIcon";
import IconButton from "../iconButton";
import { CartContext } from "../../context/cartProvider";

const Navbar = () => {
  const MenuItems = [
    { id: 1, title: "Home", path: "/home" },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
      children: [
        { id: 11, title: "Shop 1", path: "/shop1" },
        { id: 12, title: "Shop 2", path: "/shop2" },
      ],
    },
    {
      id: 3,
      title: "Product",
      path: "/product",
      children: [
        { id: 11, title: "Product 1", path: "/product1" },
        { id: 12, title: "Product 2", path: "/product2" },
      ],
    },
    { id: 4, title: "Contact Us", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [cartBar, setCartBar] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartBarOpen = () => {
    setCartBar(true);
    document.body.style.overflow = "hidden";
  };
  const handleCartBarClose = () => {
    setCartBar(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={styles.header_navbar}>
      <Container className={styles.navbar_container}>
        <div className={styles.logo}>
          <div className={styles.hamburger_menu_icon} onClick={toggleMenu}>
            <HumbergerIcon />
          </div>
          <Logo />
        </div>

        {/* Hamburger Icon */}

        {/* Menu Items */}
        <nav
          className={`${styles.nav_items} ${
            isMenuOpen ? styles.show_menu : styles.hide_menu
          }`}
        >
          {MenuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>

        {/* Icons Section */}
        <div className={styles.icon_section}>
          <Link to={"/"}>
            <SearchIcon />
          </Link>
          <Link to={"/signUp"}>
            <Profile />
          </Link>
          <SideCartBar  />
        </div>
      </Container>
       
    </header>
  );
};

export default Navbar;

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
