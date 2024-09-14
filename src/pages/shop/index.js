import React, { Fragment, useEffect, useState, useCallback } from "react";
import styles from "./style.module.css";
import BreadCrumb from "../../components/breadCrumb";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import FeatureProduct from "../../components/featureProduct";
import SelectBox from "../../components/selectBox";
import SortIcon01 from "../../icons/sortIcon01";
import SortIcon02 from "../../icons/sortIcon02";
import SortIcon03 from "../../icons/sortIcon03";
import SortIcon04 from "../../icons/sortIcon04";
import Newsletter from "../../components/newsLetter";
import newsletterImg from "../../assets/images/newsletter-bg-img02.png";
import Button from "../../components/button";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const getProducts = useCallback((limit) => {
    fetch(`https://fakestoreapi.com/products?limit`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error("Error fetching products:", error)); // Handle errors
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const optionData1 = [
    {
      value: "All Room",
      name: "All Room",
    },
    {
      value: "Living Room",
      name: "Living Room",
    },
    {
      value: "Bedroom",
      name: "Bedroom",
    },
    {
      value: "Bathroom",
      name: "Bathroom",
    },
    {
      value: "Dinning",
      name: "Dinning",
    },
    {
      value: "Outdoor",
      name: "Outdoor",
    },
  ];

  const sortOptions = [
    { value: "sortBy", label: "Sort by" },
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "lth", label: "Price: Low to High" },
    { value: "htl", label: "Price: High to Low" },
  ];

  return (
    <Fragment>
      <BreadCrumb />
      <Section pt={"60"} pb={"100"}>
        <Container>
          <Row className={styles.mb_40}>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <SelectBox title={"categories"} optionData={optionData1} />
                </Col>
                <Col lg={6}>
                  <SelectBox title={"price"} optionData={optionData1} />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className={styles.sort_third}>
                <form>
                  <select>
                    {sortOptions.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </form>
                <div className={styles.sort_icon}>
                  <div className={styles.icon}>
                    <SortIcon01 />
                  </div>
                  <div className={styles.icon}>
                    <SortIcon02 />
                  </div>
                  <div className={styles.icon}>
                    <SortIcon03 />
                  </div>
                  <div className={styles.icon}>
                    <SortIcon04 />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            {products.map((item, i) => (
              <Col lg={3} md={6} xs={6}>
                <FeatureProduct 
                  Image={item.image}
                  title={item.title}
                  price={item.price}
                  disc={item.rating.count > 300 ? "50" : ""}
                  To={item.path}
                  id={item.id}
                  productItem={item}
                  Rating={item.rating.rate}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className={styles.show_btn}>
                <Button text={"Show More"} size={"medium"} type={"outline"} display={"cyilender"} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Newsletter BgImg={newsletterImg} isWhite={true}/>
    </Fragment>
  );
};
export default Shop;
