import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../button";
import StarIcon from "../../icons/starIcon";
import { CartContext } from "../../context/cartProvider";
import { SnackBarContext } from "../../context/snackBarProvider";
import Snackbar from "../snackBar";

const FeatureProduct = ({
  title,
  price,
  disc,
  To,
  Rating,
  id,
  Image,
  productItem,
}) => {
  const { handleShowSnackBar , snackBarId} = useContext(SnackBarContext); 
  const { cart, addToCart } = useContext(CartContext);
  const [showBtn, setShowBtn] = useState(false); 




  useEffect(() => {
    const showBtnCondition = cart.findIndex((cartItem) => cartItem.id === id);
    if (showBtnCondition !== -1) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [cart, id]);
  
  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to cart
    handleShowSnackBar(id,"Item added to cart successfully!");  
    console.log(handleShowSnackBar)
  };

  return (
    <div className={styles.product_main}>
      <div className={styles.product_image}>
        <Link to={`/singleProduct/${id}`}>
          <img src={Image} alt="product" />
        </Link>
        <div className={styles.product_labels}>
          <span className={styles.hot_button}>Hot</span>
          {disc > 0 && <span className={styles.discount_button}>-{disc}%</span>}
        </div>
        {!showBtn ? (
          <Button
            text="Add To Cart"
            size="small"
            type="fill"
            align="center"
            isButton={true}
            customCss={styles.cart_button}
            onClick={() => handleAddToCart(productItem)} // Call handleAddToCart on click
          />
        ) : (
          <Button
            text="Go To Cart"
            size="small"
            type="fill"
            align="center"
            to={"/Cart"}
            customCss={styles.cart_button}
          />
        )}
      </div>
      <div className={styles.product_info}>
        <div className={styles.product_rating}>
          {Array.from({ length: Rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <Link to={`/singleProduct/${id}`}>
          <h5>{title}</h5>
        </Link>
        <p>
          ${price}
          <del className={styles.discount}>
            {disc ? `$${(price + (price * disc) / 100).toFixed(2)}` : ""}
          </del>
        </p>
      </div>
     { snackBarId  === id && <Snackbar   /> }
    </div>
  );
};

export default FeatureProduct;
