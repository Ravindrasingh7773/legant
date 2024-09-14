import React from "react";
import styles from "./style.module.css";

const IconButton = ({type,icon,onClick}) => {
  return (
    <button className={`${styles.iconButton} ${styles[type]}`} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
