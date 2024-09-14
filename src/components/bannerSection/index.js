import React, { Fragment } from "react";
import Section from "../section";
import BannerImage from "../../assets/images/banner-bg.jfif";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import Button from "../button";

const BannerSection = () => {
  return (
    <Fragment>
      <Section>
        <Container fluid>
          <Row className="g-0">
            <Col lg={6}>
              <img src={BannerImage} alt="banner image" />
            </Col>
            <Col lg={6}>
              <div className={styles.banner_main}>
                <div className={styles.banner_content}>
                  <h6 className={styles.sale}>Limited Edition</h6>
                  <h3 className={styles.title}>Hurry up! 30% OFF</h3>
                  <p className={styles.desc}>
                    Find clubs that are right for your game
                  </p>
                  <div className={styles.counter}>
                    <p className={styles.desc2}>Offer expires in:</p>
                    <div className={styles.counter_box}>
                      <span>02</span>
                      <span>12</span>
                      <span>45</span>
                      <span>05</span>
                    </div> 
                  </div>
                  <Button
                    text={"Shop Now"}
                    size={"large"}
                    customCss={styles.banner_button}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default BannerSection;
