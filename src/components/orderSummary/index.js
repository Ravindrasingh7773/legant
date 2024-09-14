 
import React ,{useContext} from 'react';
import styles from './style.module.css';
import Button from '../button';
import img2 from "../../assets/images/product-img-2.jpeg";
import img1 from "../../assets/images/product-img-1.jpeg";
import CloseIcon from "../../icons/closeIcon"; 
import CartItem from '../cartItem';
import TopbarIcon from '../../icons/topbarIcon';
import { CartContext } from "../../context/cartProvider";

const OrderSummary = () => {
  const { cart, removeFromCart, clearCart, updateQuantity  } = useContext(CartContext); 
  
  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
 

  const ShoppingCardData = [
    {
      imgSrc: img1,
      name: "Fresh Indian Orange",
      quantity: "1",
      color:"black",
      price: "38.00",
    },
    {
      imgSrc: img2,
      name: "Green Apple",
      quantity: "1",
      color:"red",
      price: "38.00",
    },
    {
      imgSrc: img1,
      name: "Fresh Indian Orange",
      quantity: "1",
      color:"gold",
      price: "38.00",
    }
  ];
  return (
    <div className={styles.cartSummary}>
      <h3>Order summary</h3>

      <div className={styles.shippingOptions}>
        {cart.map((value, index) => (
         <CartItem
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
      <div className={styles.summary}>
        <div className={styles.summary_input}>
            <input type="text" placeholder="input"/>
            <Button type={"fill"} text={"Apply"} size={"medium"}  />
        </div>
        <div className={`${styles.subtotal} ${styles.jankate} `}>
          <span><TopbarIcon/> JankateMW</span>
          <span className={styles.jankate_2}>-$25.00 [Remove] </span>
        </div>
        <hr /> 
        <div className={styles.subtotal}>
          <span>Shipping</span>
          <span><b>Free</b></span>
        </div> 
      <hr /> 
        <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span><b>$ 99.00</b></span>
        </div>
        <hr />  
        <div className={styles.total}>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)} </span>
        </div>  
        </div>
    </div>
  );
};

export default OrderSummary;
