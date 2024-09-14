import React, { Fragment, useContext } from "react";
import Section from "../../components/section";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem2 from "../../components/cartItem2";
import Img1 from "../../assets/images/product-img-1.jpeg"
import Img2 from "../../assets/images/product-img-2.jpeg"
import Img3 from "../../assets/images/product-img-3.jpeg"
import CartSummary from "../../components/cartSummary";
import {CartContext} from "../../context/cartProvider"


const Cart = () => {
    // const cartData = [
    //     {
    //       id : 1,
    //       image : Img1,
    //       title : "Tray Table",
    //       color : "Black",
    //       Navitem : "2",
    //       price : "$19.00",
    //       subtotle : "$38.00",
    //     },
    //     {
    //       id : 2,
    //       image : Img2,
    //       title : "Tray Table",
    //       color : "Red",
    //       Navitem : "2",
    //       price : "$19.00",
    //       subtotle : "$38.00",
    //     },
    //     {
    //       id : 3,
    //       image : Img3,
    //       title : "Table lamp",
    //       color : "Gold",
    //       Navitem : "1",
    //       price : "$39.00",
    //       subtotle : "$39.00",
    //     },
    //   ]
      const {cart,removeFromCart, updateQuantity  }= useContext(CartContext);
  
      const handleQuantityChange = (itemId, newQuantity) => {
        updateQuantity(itemId, newQuantity);
      };
       
      return (
    <Fragment>
      <Section pt={"80"} >
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.heading}>
                <h3>Cart</h3>
              </div>
              <Col lg={8} className="mx-auto">
                <Row >
                  <Col lg={4} md={4}>
                    <Link className={`${styles.process_item} ${styles.active}`} to={"/"}>
                      <span>1</span>
                      Shopping Cart
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link className={styles.process_item} to={"/checkOut"}>
                      <span>2</span>
                      Checkout details
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link className={styles.process_item} to={"/complete"}>
                      <span>3</span>
                      Order Complete
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section pt={"80"} pb={"80"}>
         <Container>
            <Row>
            <Col lg={7}>
              <div className={styles.cart_heading}>
                <Link className={styles.product}>Product</Link>
                <Link className={styles.quantity}>Quantity</Link>
                <Link className={styles.price}>Price</Link>
                <Link className={styles.subtotle}>Subtotal</Link>
              </div>
              <div className={styles.products}>
              {cart.map ((cart,i) => (
                <CartItem2 key={i}
                image = {cart.image}
                title={cart.title}
                color = {cart.color} 
                id={cart.id} 
                quantity={cart.quantity}
                price={cart.price}
                subtotle={(cart.quantity * cart.price).toFixed(2)}
                handleQuantityChange={handleQuantityChange}
                removeFromCart={removeFromCart}
                />
              ))}
              </div>
            </Col>
            <Col lg={5}>
              <CartSummary />
            </Col>
            </Row>
         </Container>
      </Section>
    </Fragment>
  );
};

export default Cart;
