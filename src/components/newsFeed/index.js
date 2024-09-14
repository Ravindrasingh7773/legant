import React from "react"; 
import styles from "./style.module.css";
import Section from "../section";
import img1 from "../../assets/images/news-feed-image1.jfif"
import img2 from "../../assets/images/news-feed-image2.jfif"
import img3 from "../../assets/images/news-feed-image3.jfif"
import img4 from "../../assets/images/news-feed-image4.jfif"
import img5 from "../../assets/images/news-feed-image5.jfif"
import img6 from "../../assets/images/news-feed-image6.jfif"
import { Col, Container, Row } from "react-bootstrap";

const NewsFeed = () => {
    const NewsFeedData=[
        {
            image : img1
        },        {
            image : img2
        },        {
            image : img3
        },        {
            image : img4
        },        {
            image : img5
        },        {
            image : img6
        }
    ]
  return (
    <>
      <Section customCss={styles.newsfeed_section}>
        <Container >
          <Row >
            <Col lg={12} sm={12} xs={12}>

              <h6>newsfeed</h6>
              <h3>Instagram</h3>
              <p>Follow us on social media for more discount & promotions</p>
              <h4>@3legant_official</h4>
            </Col>
          </Row>
          </Container>
          <Container fluid className="px-0">
          <Row className="g-0">
            {NewsFeedData.map((item,i)=>
            <Col lg={2} key={i} sm={6} xs={6}>
                <img src={item.image} key={i} className={styles.news_image}/> 
            </Col>
            )}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default NewsFeed;
