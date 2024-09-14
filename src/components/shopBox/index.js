import React, { Fragment } from "react";
import Button from "../button"
import styles from "./style.module.css";

const ShopBox = ({image,title,buttonText,content}) => {
  return (
    <Fragment>
      <div className={styles.shop_box}>
        <img src={image} alt={title} className={styles.image} />
        <div className={`${styles["content" + content]} ${styles.shop_content}`}>
          <h2 className={styles.title}>{title}</h2>
          <Button
            text={buttonText}
            type={"text"}
            showArrow={true}
            customCss={styles.shop_btn}
          /> 
        </div>
      </div>
    </Fragment>
  );
};

export default ShopBox;
