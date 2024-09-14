import React, { Fragment, useContext } from "react";
import styles from "./style.module.css";
import img2 from "../../assets/images/product-img-2.jpeg";
import img1 from "../../assets/images/product-img-1.jpeg";
import CloseIcon from "../../icons/closeIcon";
import Button from "../button";
import CartBarProduct from "../cartItem";
import { CartContext } from "../../context/cartProvider";
import CartIcon from "../../icons/cart";

// { id: 1, name: 'Tray Table', color: 'Black', price: 19.99, quantity: 2, imgSrc: '/path/to/tray-table.png' }
const ShoppingCardData = [
  {
    imgSrc: img1,
    name: "Fresh Indian Orange",
    quantity: "1",
    color: "black",
    price: "12.00",
  },
  {
    imgSrc: img2,
    name: "Green Apple",
    quantity: "1",
    color: "red",
    price: "14.00",
  },
  {
    imgSrc: img1,
    name: "Fresh Indian Orange",
    quantity: "1",
    color: "gold",
    price: "12.00",
  },
  {
    imgSrc: img2,
    name: "Green Apple",
    quantity: "1",
    price: "14.00",
    color: "black",
  },
];
const SideCartBar = ( ) => {
  const {
    cart,
    removeFromCart,
    clearCart,
    updateQuantity,
    cartBarOpen,
    handleCartBarOpen,
    handleCartBarClose,
  } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Fragment>
       <button className={styles.carticon} onClick={handleCartBarOpen}>
            <CartIcon />
            <span>{cart.length}</span>
          </button>
      {cartBarOpen && (
        <>
          <div className={`${styles.sidebar} ${cartBarOpen ? styles.open : ""}`}>
            <div className={`${styles.sb_head}`}>
              <div className={`${styles.sbh_inner}`}>
                <div className={`${styles.sbh_title}`}> Cart </div>
                <button onClick={handleCartBarClose} className={styles.sbh_cls}>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className={`${styles.sb_body}`}>
              {cart.map((value, index) => (
                <CartBarProduct
                  key={index}
                  id={value.id}
                  name={value.title}
                  quantity={value.quantity}
                  price={value.price}
                  color={value.color}
                  imgSrc={value.image}
                  handleQuantityChange={handleQuantityChange}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <div className={`${styles.sb_foot}`}>
              <div className={`${styles.sbf_inner}`}>
                <div className={`${styles.sbfi_pc}`}>
                  <span>Subtotal</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                <div className={`${styles.sbfi_btns}`}>
                  {cart.length > 0 && (
                    <Button
                      size={"large"}
                      type={"text"}
                      text={"Clear Cart"}
                      align={"center"}
                      isButton={true}
                      onClick={clearCart}
                    />
                  )}

                  <Button
                    size={"large"}
                    type={"fill"}
                    text={"Checkout"}
                    to={"/checkOut"}
                    onClick={handleCartBarClose}
                  />
                  <Button
                    size={"large"}
                    type={"text"}
                    text={"View Cart"}
                    align={"center"}
                    to={"/cart"}
                    onClick={handleCartBarClose}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleCartBarClose}
            className={`${styles.cb_overlay} ${cartBarOpen ? styles.open : ""}`}
          ></div>
        </>
      )}
    </Fragment>
  );
};

export default SideCartBar;
