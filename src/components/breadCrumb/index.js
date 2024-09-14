import React, { Fragment  } from "react";
import styles from "./style.module.css"; 
import Section from "../section";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <Fragment>
      <Section  >
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.breadcrumb_content}>
              <div className={styles.breadcrumb_top}>
                  <Link>Home</Link>
                  <Link>Shop</Link> 
                </div>
                <h4>Shop Page</h4>
                <p>Let’s design the place you always imagined.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};
export default BreadCrumb;
