import React from "react";
import { Link } from "react-router-dom";
import LogoUrl from "../../assets/images/logo.png";
import styles from "./style.module.css";

const Logo = ({ img = LogoUrl }) => {
  return (
    <Link className={`${styles.logo}`}>
      <img src={img} alt="" />
    </Link>
  );
};

export default Logo;
