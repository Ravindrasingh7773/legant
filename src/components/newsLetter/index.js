import React from "react";
import BgImg from "../../assets/images/newsletter-bg-img.png"; 
import styles from "./style.module.css";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";

const Newsletter = ({BgImg,isWhite}) => {
  return (
    <>
      <Section bgImg={BgImg} pt={"110"} pb={"110"}>
        <Container fluid>
          <Row className="g-0 justify-content-center">
            <Col lg={4}>{isWhite ?  <div className={styles.newsletter}>
                <h3 className={`${styles.nc_title} ${styles.title_black}`}>Join Our Newsletter</h3>
                <p className={`${styles.nc_des} ${styles.des_black}`}>Sign up for deals, new products and promotions</p>
                <div className={styles.newsletter_form}>
                  <form>
                    <div className={`${styles.input_grp} ${styles.input_black}`}> 
                      <input type="email" placeholder="Email address" />
                      <input
                        type="submit"
                        value="Sign Up"
                        className={styles.btn}
                      />
                    </div>
                  </form>
                </div>
              </div> :
              <div className={styles.newsletter}>
              <h3 className={styles.nc_title}>Join Our Newsletter</h3>
              <p  className={`${styles.nc_des}`}>Sign up for deals, new products and promotions</p>
              <div className={styles.newsletter_form}>
                <form>
                  <div className={styles.input_grp}> 
                    <input type="email" placeholder="Email address" />
                    <input
                      type="submit"
                      value="Sign Up"
                      className={styles.btn}
                    />
                  </div>
                </form>
              </div>
              </div>  
              }
             
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Newsletter;

 