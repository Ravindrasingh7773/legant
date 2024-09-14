import React, { Fragment } from 'react'
import styles from "./style.module.css" 
import Section from "../section"
import { Col, Container, Row } from 'react-bootstrap'
import {Link } from "react-router-dom"
import InstagramIcon from '../../icons/instagramIcon'
import FaceBookIcon from '../../icons/facebookIcon'
import YoutubeIcon from '../../icons/youtubeIcon'
import Img1 from "../../assets/images/Payment Methods (1).png"
import Img2 from "../../assets/images/Payment Methods (2).png"
import Img3 from "../../assets/images/Payment Methods (3).png"
import Img4 from "../../assets/images/Payment Methods (4).png"
import Img5 from "../../assets/images/Payment Methods (5).png"
import Logo from '../logo'

const Footer = () => {
  return (
    <Fragment>
        <Section   bgColor={"black"} >
            <Container>
                <Row className={styles.footer_top}>
                    <Col lg={6}>
                        <div className={styles.footer_left}>
                            <div><Logo/></div>
                            <h4>More than just a game. It’s a lifestyle.</h4>
                            <div className={styles.social_icons}>
                            <Link to={"/"}><InstagramIcon/></Link> 
                            <Link to={"/"}> <FaceBookIcon /></Link> 
                            <Link to={"/"}><YoutubeIcon /></Link>                            
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={4}>
                            <div className={styles.footer_list}>
                                <h4>Page</h4>
                                <ul className="list-unstyled">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/"}>Shop</Link></li>
                                    <li><Link to={"/"}>Product</Link></li>
                                    <li><Link to={"/"}>Articles</Link></li>
                                    <li><Link to={"/"}>Conatct Us</Link></li>
                                </ul>
                            </div>
                            </Col>
                            <Col lg={4}>
                            <div className={styles.footer_list}>
                                <h4>Info</h4>
                                <ul className="list-unstyled">
                                    <li><Link to={"/"}>Shipping Policy</Link></li>
                                    <li><Link to={"/"}>Return $ Refund</Link></li>
                                    <li><Link to={"/"}>Support</Link></li>
                                    <li><Link to={"/"}>FAQs</Link></li> 
                                </ul>
                            </div>
                            </Col>
                            <Col lg={4}>
                            <div className={`${styles.footer_address} ${styles.footer_list}`}>
                                <h4>Office</h4>
                                <address>43111 Hai Trieu street,<br/>District 1, HCMC<br/> Vietnam</address>
                                <div className={styles.contact}>84-756-3237</div>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className={styles.bottom_bar}>
                <div className={styles.copyright}>Copyright © 2023 3legant. All rights reserved</div>
                <div className={styles.policy}>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                </div>
                <div className={styles.payments}>
                   <Link><img src={Img1} alt="footer img"/></Link>
                   <Link><img src={Img2} alt="footer img"/></Link>
                   <Link><img src={Img3} alt="footer img"/></Link>
                   <Link><img src={Img4} alt="footer img"/></Link>
                   <Link><img src={Img5} alt="footer img"/></Link>

                </div>
            </div>
            </Container>
        </Section>
    </Fragment>
  )
}

export default Footer
