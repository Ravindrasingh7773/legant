import React, {useCallback, useContext, useEffect, useState } from "react";
import styles from "./style.module.css";

import CloseIcon from "../../icons/closeIcon";
import Button from "../button";
import IconButton from "../iconButton";
import { CartContext } from "../../context/cartProvider";

const CartItem2 = ({ image, color, title, quantity, price ,removeFromCart ,id,subtotle,
    handleQuantityChange,}) => { 

      const {cart} =useContext(CartContext)

    const quantityChange =  useCallback((type) => {
    
      if(type === "minus" && quantity > 1){
        handleQuantityChange (id,(quantity - 1))
      }
      else if( type === "plus"){ 
        handleQuantityChange (id,(quantity + 1))
      }
      else{
        removeFromCart(id)
      }
    },[handleQuantityChange,id,quantity])  
    
  return (
     
    <div className={styles.cart_product}>
        <div className={styles.cart_item}>
            <div className={styles.cart_img}>
                <img src={image} alt="Cart Image" />
            </div>
            <div className={styles.cart_cnt}>
                <h3>{title}</h3>
                <p>Color : Red</p> 
                <button className={styles.remove_button} onClick={() => removeFromCart(id)}><CloseIcon/> remove</button>
            </div>
        </div>
        <div className={styles.cart_price}>
            <div className={styles.cart_qty}>
            <button  onClick={()=>quantityChange ("minus")}>
            -
          </button>
          <input type="number"  value={quantity} />
          <button onClick={()=>quantityChange ("plus")}>+ </button>
            </div>
            <div className={styles.price}> ${price} </div>
            <div className={styles.subtotle}>${subtotle}</div> 
        </div>
    </div>
  );
};

export default CartItem2;

// import React from 'react';
// import styles from './style.module.css';
// import Button from '../button';
// import Cross from '../../icons/cross';

// const CartProduct = ({image, color, title, NavItem, price, subtotle}) => {
//   return (
//     <div className={styles.cart_product}>
//         <div className={styles.cart_item}>
//             <div className={styles.cart_img}>
//                 <img src={image} alt="Cart Image" />
//             </div>
//             <div className={styles.cart_cnt}>
//                 <h3>{title}</h3>
//                 <p>Color :{color}</p>
//                 <Button icon={<Cross/>} text={"Remove"} type={"text"}/>
//             </div>
//         </div>
//         <div className={styles.cart_price}>
//             <div className={styles.cart_qty}>
//                 <button>-</button>
//                 <input type="text" value={NavItem} readOnly/>
//                 <button>+</button>
//             </div>
//             <div className={styles.price}> {price} </div>
//             <div className={styles.subtotle}> {subtotle} </div>
//         </div>
//     </div>
//   );
// }

// export default CartProduct;
