import React, { Fragment } from "react";
import Section from "../section"; 
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import Button from "../button";
import Articles from "../articles";
import articleimg01 from "../../assets/images/Articles-img-01.png"
import articleimg02 from "../../assets/images/Articles-img-02.png"
import articleimg03 from "../../assets/images/Articles-img-03.png"

const ArticalSection = () => {

    const ArticleData = [
        {
          id: 1,
          articlesimg: articleimg01,
          title: "7 ways to decor your home",
          button: (
            <Button
                  text={"Read More"} 
                  type={"text"}
                  showArrow={true}
                />
          ),
        },
        {
          id: 2,
          articlesimg: articleimg02,
          title: "Kitchen organization",
          button: (
            <Button
                  text={"Read More"} 
                  type={"text"}
                  showArrow={true}
                />
          ),
        },
        {
          id: 3,
          articlesimg: articleimg03,
          title: "Decor your bedroom",
          button: (
            <Button
                  text={"Read More"} 
                  type={"text"}
                  showArrow={true}
                />
          ),
        },
      ];

  return (
    <Fragment>
      <Section pt={"80"} pb={"80"}>
        <Container >
          <Row >
          <Col lg={12}>
              <div className={styles.product_heading}>
                <h3>Latest Articles</h3>

                <Button
                  text={"More Products"} 
                  type={"text"}
                  showArrow={true}
                />
              </div>
            </Col>
          </Row> <Row>
            {ArticleData.map((article) => (
              <Col lg={4} sm={12} key={article.id}>
                <Articles
                  articlesimg={article.articlesimg}
                  title={article.title}
                  button={article.button}
                />
              </Col>
            ))}
          </Row>  
        </Container>
      </Section>
    </Fragment>
  );
};

export default ArticalSection;
