import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import item1 from "../../assets/images/product-img-1.jpeg"
import item2 from "../../assets/images/product-img-2.jpeg"
import item3 from "../../assets/images/product-img-3.jpeg"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <>
      <Section pt={"80"}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.heading}>
                <h3>Complete</h3>
              </div>
              <Col lg={8} className="mx-auto">
                <Row>
                  <Col lg={4} md={4}>
                    <Link
                      className={`${styles.process_item} ${styles.passed}`}
                      to={"/cart"}
                    >
                      <span>1</span>
                      Shopping Cart
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link
                      className={`${styles.process_item} ${styles.passed}`}
                      to={"/checkOut"}
                    >
                      <span>2</span>
                      Checkout details
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link className={`${styles.process_item} ${styles.active}`}>
                      <span>3</span>
                      Order Complete
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section pt={"80"} pb={"140"}>
        <Container>
          <Row>
            <Col lg={7} className="mx-auto">
              <div className={styles.order_complete_box}>
                <div className={styles.order_title}>
                    <h6>Thank you! 🎉</h6>
                    <h4>Your order has been received</h4>
                </div> 
                <div className={styles.order_items}>
                  <div className={styles.order_item}>
                    <img src={item1} alt="item 1" />
                    <span>2</span>
                  </div>
                  <div className={styles.order_item}>
                    <img src={item2} alt="item 1" />
                    <span>2</span>
                  </div>
                  <div className={styles.order_item}>
                    <img src={item3} alt="item 1" />
                    <span>3</span>
                  </div>
                </div> 
                <div className={styles.order_detail}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Complete;
