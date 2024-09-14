import React, { Fragment } from "react"; 
import styles from "./style.module.css";
import Section from "../section";
import img1 from "../../assets/images/polo_handglubs.png" 
import { Col, Container, Row } from "react-bootstrap";
import CategoryProduct from "../categoryProduct";

const CategorySection = ({CategoryItems}) => {
     
  // const CategoryItems = [{
  //   image : img1,
  //   title : "Category"
  // },{
  //   image : img1,
  //   title : "Category"
  // },{
  //   image : img1,
  //   title : "Category"
  // },{
  //   image : img1,
  //   title : "Category"
  // },{
  //   image : img1,
  //   title : "Category"
  // },{
  //   image : img1,
  //   title : "Category"
  // },]

  return (
    <Fragment>
      <Section pt={"80"} pb={"80"}>
        <Container>
          <Row>
            <Col>
              <h4 className={`${styles.cat_title}`}>
              Shop by Categories
              </h4>
            </Col>
          </Row>
          <Row>
            {CategoryItems.map((item,i)=>(
              <Col lg={4} sm={6} xs={6} key={i}>
              <CategoryProduct key={i}  image={item.image} title={item.name}/> 
              </Col>
            ))}
          </Row>
        </Container>
      </Section>    
    </Fragment>
  );
};

export default CategorySection; 