import React, { useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../logo";
import MenuItem from "../menuItem";
import SearchIcon from "../../icons/searchicon";
import Profile from "../../icons/profile";
import CartIcon from "../../icons/cart";
import SideCartBar from "../sideCartBar";

const Navbar = () => {
  const MenuItems = [
    {
      id: 1,
      title: "Home",
      path: "/home",
    },
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
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
  ];

  const [cartBar, setCartBar] = useState(false);

  const handleCartBarOpen = () => {
    setCartBar(true);
    document.body.style.overflow = "hidden";
  };

  const handleCartBarClose = () => {
    setCartBar(false);
    document.body.style.overflow = "";
  };
  return (
    <div className={styles.header_navbar}>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.menubar}>
              {MenuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
            <div
              className={`${styles.social_icons} "d-flex justify-content-center"`}
            >
              <Link to={"/signUp"}>
                <SearchIcon />
              </Link>
              <Link to={"/signUp"}>
                <Profile />
              </Link>
              <button className={styles.carticon} onClick={handleCartBarOpen}>
                <CartIcon />
                <span>2</span>
              </button>
              {cartBar ? (
                <SideCartBar CartBar={cartBar} onClose={handleCartBarClose} />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
