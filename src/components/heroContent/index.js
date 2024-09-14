import React from "react";
import styles from "./style.module.css"; // Importing CSS module
import Button from "../button";
import { Link } from "react-router-dom";

const HeroContent = ({ title, des, buttonText }) => {
  return (
    <div className={styles.hc_text}>
      <h2>{title}</h2>
      <p>{des}</p>
      <Button text={buttonText} size={"small"} customCss={styles.hs_button} />
    </div>
  );
};

export default HeroContent;
