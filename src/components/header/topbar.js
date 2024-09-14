import React, { useState, Fragment } from "react";
import styles from "./style.module.css";
import { Container, Row } from "react-bootstrap";
import TopbarIcon from "../../icons/topbarIcon";
import Button from "../button";
import CloseIcon from "../../icons/closeIcon";

const Topbar = () => {
  // State to manage visibility of the topbar
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle closing the topbar
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Fragment>
      {isVisible && (
        <div className={`${styles.header_topbar}`}>
          <Container>
            <Row >
              <div className={`${styles.ht_text} col-11`}>
                <div className={styles.htt_icon}>
                  <TopbarIcon />
                </div>
                <p>30% off storewide — Limited time!</p>
                <div
                  className={`${styles.htt_button} d-none d-sm-block d-lg-block`}
                >
                  <Button text={"Shop Now"} type={"text"} showArrow={true} to={"/shop"} onClick={handleClose}  />
                </div>
              </div>
              <div
                className={`${styles.htt_close} col-1`}
                onClick={handleClose}  // Close icon click event
              >
                <CloseIcon />
              </div>
            </Row>
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default Topbar;
