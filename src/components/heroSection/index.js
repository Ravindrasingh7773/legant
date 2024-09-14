import React from "react";
import styles from "./style.module.css";
import HsBgImg from "../../assets/images/hero_bg_img.jfif";
import { Container, Row, Col } from "react-bootstrap"; 
import Section from "../section";
import HeroContent from "../heroContent";

const Hero = () => {
  return (
    <Section customCss={`${styles.hero}`}   >
      <Container >
        <Row> 
          <Col lg={6} className={`${styles.h_col} order-2 order-lg-1`}>
            <div className={styles.h_content}> 
              <HeroContent title={"More than just a game.It’s a lifestyle."} des={"Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint."} buttonText={"Shopping Now"}/>
            </div>
          </Col> 
          <Col lg={6} className={`${styles.h_img_col} order-1 order-lg-2`}>
          <img src={HsBgImg} alt="hero placeholder"/>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;