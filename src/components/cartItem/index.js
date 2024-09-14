import React, { useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import CloseIcon from "../../icons/closeIcon";

const CartItem = ({
  name,
  price,
  color,
  id,
  imgSrc,  quantity,
  removeFromCart,
  handleQuantityChange,
}) => { 

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
    <div className={styles.cartItem}>
      <div className={styles.ci_image}>
        <img src={imgSrc} alt={name} className={styles.itemImage} />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.itemPrice}>
          <h4>{name}</h4>
          <p>${price}</p>
        </div>
        <div className={styles.item_des}>
          <p>Color : {color}</p>
          <button
            className={styles.removeBtn}
            onClick={() => removeFromCart(id)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.quantityControl}>
          <button onClick={()=>quantityChange ("minus")}>-</button>
          <input type="number" value={quantity} />
          <button onClick={()=>quantityChange ("plus")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;         