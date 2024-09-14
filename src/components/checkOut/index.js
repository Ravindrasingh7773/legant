import React, { useState,useContext } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import Section from "../section";
import { Link } from "react-router-dom";
import OrderSummary from "../orderSummary";
import { AddressContext } from "../../context/addressProvider";

const CheckOut = () => {
    
  const {address,setAddress} = useContext(AddressContext) 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };
 

  return (
    <div className={styles.check_out}>
      <Section pt={"80"}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.heading}>
                <h3>Check Out</h3>
              </div>
              <Col lg={8} className="mx-auto">
                <Row>
                  <Col lg={4} md={4}>
                    <Link
                      className={`${styles.process_item} ${styles.passed}`}
                      to={"/cart"}
                    >
                      <span>1</span>
                      Shopping Cart
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link className={`${styles.process_item} ${styles.active}`}>
                      <span>2</span>
                      Checkout details
                    </Link>
                  </Col>
                  <Col lg={4} md={4}>
                    <Link className={styles.process_item} to={"/complete"}>
                      <span>3</span>
                      Order Complete
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pt={"80"} pb={"140"}>
        <Container>
          <form>
            <Row>
              <Col lg={7}>
                <div className={`${styles.contact_info} mb-4`}>
                  <div className={styles.title}>Contact Information</div>
                  <div className={`${styles.user_name} pt-3`}>
                    <div className="w-100">
                      <label htmlFor="f_name">FIRST NAME</label>
                      <br />
                      <input
                        type="text"
                        id="f_name"
                        name="firstName"
                    value={address.firstName || ""}
                    onChange={handleInputChange}
                        placeholder="First name"
                      />
                    </div>

                    <div className="w-100">
                      <label htmlFor="l_name">LAST NAME</label>
                      <br />
                      <input
                        type="text"
                        id="l_name"
                    name="lastName"
                    value={address.lastName || ""}
                    onChange={handleInputChange}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="w-100 pt-3">
                    <label htmlFor="p_number">PHONE NUMBER</label>
                    <br />
                    <input
                      type="text"
                      id="p_number"
                  name="phoneNumber"
                  value={address.phoneNumber || ""}
                  onChange={handleInputChange}
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="w-100 pt-3">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <br />
                    <input
                      type="email"
                      id="email"
                  name="email"
                  value={address.email || ""}
                  onChange={handleInputChange}
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className={`${styles.shipping_address} mb-4`}>
                  <div className={styles.title}>Shipping Address</div>
                  <div className="w-100 pt-3">
                    <label htmlFor="address">STREET ADDRESS *</label>
                    <br />
                    <input
                      type="text"
                      id="address"
                  name="streetAddress"
                  value={address.streetAddress || ""}
                  onChange={handleInputChange}
                      placeholder="Street Address"
                    />
                  </div>

                  <div className="w-100 pt-3">
                    <label htmlFor="country">COUNTRY *</label>
                    <br />
                    <select
                      id="country"
                  name="country"
                  value={address.country || ""}
                  onChange={handleInputChange}
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>

                  <div className="w-100 pt-3">
                    <label htmlFor="city">TOWN / CITY *</label>
                    <br />
                    <input
                      type="text"
                      id="city"
                  name="town"
                  value={address.town || ""}
                  onChange={handleInputChange}
                      placeholder="Town / City"
                    />
                  </div>

                  <div className={`${styles.state_zip} pt-3`}>
                    <div className="w-100">
                      <label htmlFor="state">STATE</label>
                      <br />
                      <input
                        type="text"
                        id="state"
                    name="state"
                    value={address.state || ""}
                    onChange={handleInputChange}
                        placeholder="State"
                      />
                    </div>

                    <div className="w-100">
                      <label htmlFor="zip">ZIP CODE</label>
                      <br />
                      <input
                        type="text"
                        id="zip"
                    name="zipCode"
                    value={address.zipCode || ""}
                    onChange={handleInputChange}
                        placeholder="ZIP Code"
                      />
                    </div>
                  </div>
                  
              <div className={styles.b_address}>
                <input
                  type="checkbox"
                  id="b_address"
                  className={styles.input_width}
                />
                <label htmlFor="b_address">
                  Use a different billing address (optional)
                </label>
              </div>
                </div>

                <div className={`${styles.payment_method} mb-4`}>
                  <div className={styles.title}>Payment Method</div>
                  <div className="pt-3">
                    <div className={`${styles.pay_method}`}>
                      <input
                        type="radio"
                        id="credit"
                        name="paymentMethod"
                        value="credit"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="credit">Pay by Card Credit</label>
                    </div>
                  </div>

                  <div className={`${styles.pay_pal} pt-3 pb-4`}>
                    <div className={`${styles.pay_method}`}>
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="paypal">Paypal</label>
                    </div>
                  </div>

                  <div className="w-100 pt-3">
                    <label htmlFor="card">CARD NUMBER</label>
                    <br />
                    <input
                      type="text"
                      id="card"
                      name="cardNumber"
                    value={address.cardNumber || ""}
                      onChange={handleInputChange}
                      placeholder="1234 1234 1234"
                    />
                  </div>

                  <div className={`${styles.state_zip} pt-3`}>
                    <div className="w-100">
                      <label htmlFor="expirationDate"> EXPIRATION DATE</label>
                      <br />
                      <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                    value={address.expirationDate || ""}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="w-100">
                      <label htmlFor="cvc">CVC</label>
                      <br />
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                    value={address.cvc || ""}
                        onChange={handleInputChange}
                        placeholder="CVC code"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.btn}> 
                  <input type="submit" value="submit"  />
                </div>
              </Col>
              <Col lg={5}>
                <OrderSummary />
              </Col>
            </Row>
          </form>
        </Container>
      </Section>
    </div>
  );
};

export default CheckOut;
 