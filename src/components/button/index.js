import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/arrowRightIcon";
import styles from "./style.module.css";

const Button = ({ text, to, size, bg, display, align, customCss, type, showArrow, isButton,onClick }) => {
  const commonClasses = `${styles.button} ${styles[size]} ${styles[type]} ${styles[bg]} ${styles[display]} ${styles["align"+align]} ${customCss}`;

  return isButton ? (
    <button className={commonClasses} onClick={onClick}>
      {text}
      {showArrow && <ArrowIcon className={styles.icon} />}
    </button>
  ) : (
    <Link to={to} className={commonClasses} onClick={onClick}>
      {text}
      {showArrow && <ArrowIcon className={styles.icon} />}
    </Link>
  );
};

export default Button;
