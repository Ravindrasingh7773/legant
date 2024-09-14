import React, { Fragment } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.css";
import Section from "../section";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Col, Container, Row } from "react-bootstrap";
import FeatureProduct from "../featureProduct";

const SliderSection = ({ title, ProductItems }) => {
  return (
    <Fragment>
      <Section pt={"50"} pb={"50"}>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className={styles.title}>{title}</h2>
            </Col>
            <Col lg={6}>
              <div id="containerForBullets"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
              
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1.5}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                onInit={(swiper) => {
                  swiper.el.addEventListener("mouseenter", () => {
                    swiper.autoplay.stop();
                  });
                  swiper.el.addEventListener("mouseleave", () => {
                    swiper.autoplay.start();
                  });
                }}
                loop={true}
                pagination={{
                  el: "#containerForBullets",
                  clickable: true,
                  bulletClass: "swiper-custom-bullet",
                  bulletActiveClass: "swiper-custom-bullet-active",
                  renderBullet: (index, className) => {
                    return ``; // Numbered pagination bullets
                  },
                }}
                breakpoints={{
                  520: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    centeredSlides: true,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                }}
                
              >
                {ProductItems.map((item, i) => (
                  <SwiperSlide key={i}>
                    <FeatureProduct
                      Image={item.image}
                      title={item.title}
                      price={item.price}
                      id={item.id}
                      disc={item.rating.count > 300 ? "50" : ""}
                      To={item.path}
                      productItem={item}
                      Rating={item.rating.rate}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default SliderSection;
