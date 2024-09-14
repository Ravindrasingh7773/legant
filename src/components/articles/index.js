import React, { Fragment } from "react";
import styles from "./style.module.css";

const Articles = ({ articlesimg, title, button }) => {
  return (
    <Fragment>
      <div className={`${styles.article_box} mb-md-0 mb-4`}>
        <div className={styles.img_box}>
          <img src={articlesimg} alt="articleImg" />
        </div>
        <div className={styles.artical_info}>
        <h6>{title}</h6>
        <div>{button}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Articles;
