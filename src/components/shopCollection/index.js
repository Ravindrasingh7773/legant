import React, { Fragment } from "react";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../../assets/images/juniors-set-image.png";
import Image2 from "../../assets/images/men's-set.png";
import Image3 from "../../assets/images/women's-set.png";
import styles from "./style.module.css";
import ShopBox from "../shopBox";

const ShopCollection = () => {
  return (
    <Fragment>
      <Section pt={"50"} pb={"50"} >
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className={styles.section_title}>Shop Collection</h2>
            </Col>
          </Row>
          <Row className="g-4 g-md-3">
            <Col lg={6}>
              <ShopBox
                image={Image1}
                title={"Juniors Set"}
                buttonText={"Collection"}
                content={"bottom"}
              />
            </Col>
            <Col lg={6}> 
              <Row className="g-4">
                <Col lg={12}>
                  <ShopBox
                    image={Image2}
                    title={"Juniors Set"}
                    buttonText={"Collection"}
                    content={"bottom"}
                  />
                </Col> 
                <Col lg={12}>
                  <ShopBox
                    image={Image3}
                    title={"Juniors Set"}
                    buttonText={"Collection"}
                    content={"bottom"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default ShopCollection;
