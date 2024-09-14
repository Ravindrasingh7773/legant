import React,{Fragment} from "react";
import Cat_image from "../../assets/images/polo_handglubs.png"
import { Link } from "react-router-dom"; 
import styles from "./style.module.css"

const CategoryProduct = ({To,image,title}) => {
  return (
    <Fragment>
      <div className={styles.category_main}>
        <div className={styles.category_image}>
          <Link to={To}>
            <img src={image} alt="category image" />
          </Link>
        </div>
        <div className={styles.category_info}>
           <Link to={To}><h5>{title}</h5></Link> 
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryProduct;
