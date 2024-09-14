// import React, {
//   Fragment,
//   useCallback,
//   useEffect,
//   useState,
//   useContext,
// } from "react";
// import styles from "./style.module.css";
// import { Col, Container, Row } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import StarIcon from "../../icons/starIcon";
// import axios from "axios";
// import Button from "../button";
// import WishListIcon from "../../icons/wishlistIcons";
// import { Link } from "react-router-dom";
// import img1 from "../../assets/images/review-user-img.png";
// import img2 from "../../assets/images/review-user-img2.png";
// import img3 from "../../assets/images/review-user-img3.png";
// import img4 from "../../assets/images/review-user-img4.png";
// import img5 from "../../assets/images/review-user-img5.png";
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';
// import ReactImageMagnify from 'react-image-magnify';
// import Newsletter from "../newsLetter";
// import { CartContext } from "../../context/cartProvider";

// import newsletterImg from "../../assets/images/newsletter-bg-img02.png";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const UserData = [
//   {
//     imgUrl: img1,
//     name: "Sofia Harvetz",
//     description:
//       "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
//   },
//   {
//     imgUrl: img2,
//     name: "Nicolas Jensen",
//     description:
//       "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
//   },
//   {
//     imgUrl: img3,
//     name: "Nicolas Jensen",
//     description:
//       "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
//   },
//   {
//     imgUrl: img4,
//     name: "Nicolas Jensen",
//     description:
//       "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
//   },
//   {
//     imgUrl: img5,
//     name: "Nicolas Jensen",
//     description:
//       "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
//   },
// ];

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [count, setCount] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const { cart, addToCart ,removeFromCart,updateQuantity  } = useContext(CartContext);
//   const [quantity, setQuantity] = useState(1);

//   const fetchProduct = async () => {
//     try {
//       const response = await axios.get(
//         `https://fakestoreapi.com/products/${id}`
//       );
//       setProduct(response.data);
//       setTotalPrice(response.data.price);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching product data", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [id]);

//   useEffect(() => {
//     if (product) {
//       setTotalPrice((count * product.price).toFixed(2));
//     }
//   }, [count, product]);

//   const handleAddToCart = (item,newQuantity) => {
//     addToCart(item,newQuantity );
//   };

//   const [showGOToCart, setShowGoToCart] = useState(false);

//   useEffect(() => {
//     const existingItemIndex = cart.findIndex((item) => item.id === id);
//     if (existingItemIndex !== -1) {
//       setShowGoToCart(true);
//     } else {
//       setShowGoToCart(false);
//     }
//   }, [cart]);

//   const handleQuantityChange = (itemId, newQuantity) => {
//     updateQuantity(itemId, newQuantity);
//   };

//   const  quantityChange = (type) => {
//     if (type === "minus" && quantity > 1) {
//       setQuantity(quantity - 1);
//     } else if (type === "plus") {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleInputChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     if (!isNaN(newQuantity) && newQuantity > 0) {
//       handleQuantityChange(id, newQuantity);
//     }
//   };

//  let Rating = product?.rating?.rate;
//  let Reviews = product?.rating?.count;

//   return (
//     <Fragment>
//       <Container>
//         <Row>
//           <Col lg={6}>
//             <div className={styles.product_slider}>
//               <div className={styles.product_big_img}>
//                 <div className={styles.img}>
//                 <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: 'Product Image',
//             isFluidWidth: true,
//             src: product.image,
//           },
//           largeImage: {
//             src: product.image, // Use a high-resolution image for the zoomed-in view
//             width: 800,
//             height: 600,
//           },
//           enlargedImageContainerStyle: { background: '#fff' },
//         }}
//       />
//                 </div>
//                 <div className={styles.product_info}>
//                   <h5 className={styles.product_new}>NEW</h5>
//                   {product.rating > 0 && (
//                     <span className={styles.discount_button}>
//                       -{product.rating}%
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <Row>
//                 <Col lg={4}  sm={4} xs={4}>
//                 <Zoom>
//                   <img src={product.image} alt="single product img" className={styles.product_img1} />
//                 </Zoom>
//                 </Col>
//                 <Col lg={4}  sm={4} xs={4}>
//                 <Zoom> <img src={product.image} alt="single product img" className={styles.product_img2}  /> </Zoom>
//                 </Col>
//                 <Col lg={4}  sm={4} xs={4}>
//                 <Zoom> <img src={product.image} alt="single product img" className={styles.product_img3}  /> </Zoom>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//           <Col lg={6}>
//             <div className={styles.product_details}>
//               <span className={styles.product_rating}>
//                 {Array.from({ length: Rating }).map((_, i) => (
//             <StarIcon key={i} />
//           ))}
//               </span>
//               <span> {Reviews } Reviews</span>
//               <h2 className={styles.title}>{product.title}</h2>
//               <p>
//                 Buy one or buy a few and make every space where you sit more
//                 convenient. Light and easy to move around with removable tray
//                 top, handy for serving snacks.
//               </p>
//               <div className={styles.price}>
//                 ${product.price}
//                 <del>
//                 ${Reviews ? (product.price - (product.price * Reviews) / 100).toFixed(2) : ""}
//                 </del>
//               </div>
//               <div className={styles.expires_datdline}>
//                 <div className={styles.expires_date_text}>
//                   Offer expires in:
//                 </div>
//                 <div className={styles.expires_date}>
//                   <div className={styles.expires_date_time}>
//                     <div className={styles.title}>02</div>
//                     <span>Days</span>
//                   </div>
//                   <div className={styles.expires_date_time}>
//                     <div className={styles.title}>12</div>
//                     <span>Hours</span>
//                   </div>
//                   <div className={styles.expires_date_time}>
//                     <div className={styles.title}>45</div>
//                     <span>Minutes</span>
//                   </div>
//                   <div className={styles.expires_date_time}>
//                     <div className={styles.title}>05</div>
//                     <span>Seconds</span>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.other_info}>
//                 <div className={styles.measurements}>
//                   Measurements
//                   <span>17 1/2x20 5/8 "</span>
//                 </div>
//                 <div className={styles.choose_color}>
//                   <div className={styles.color_title}>Choose Color</div>
//                 </div>
//                 <div className={styles.color_name}>Black</div>
//                 <div className={styles.color_img}>
//                 <Zoom>   <img src={product.image} alt="product color" /></Zoom>
//                 <Zoom>   <img src={product.image} alt="product color" /></Zoom>
//                 <Zoom>   <img src={product.image} alt="product color" /></Zoom>
//                 <Zoom>  <img src={product.image} alt="product color" /></Zoom>
//                 </div>
//               </div>
//               <div className={styles.wish_cart_btn}>
//                 <div className={styles.wish_qua}>
//                   <div className={styles.product_quotient}>
//                     <button onClick={()=> quantityChange("minus")}>-</button>
//                     <input type="number" value={quantity} />
//                     <button onClick={()=> quantityChange("plus")}>+</button>
//                   </div>
//                   <div className={styles.buttons}>
//                     <Button
//                       size={"medium"}
//                       text={"Wishlist"}
//                       customCss={styles.wishlist_btn}
//                     />
//                     <div className={styles.wishlist_icon}>
//                       <WishListIcon />
//                     </div>
//                   </div>
//                 </div>
//                 <div className={styles.add_cart_button}>
//                  {!showGOToCart ? (
//                    <Button
//                    isButton={true}
//                    type={"fill"}
//                    size={"large"}
//                    text={"Add to Cart"}
//                    customCss={styles.cart_btn}
//                    onClick={() => handleAddToCart(product , quantity)}
//                  />
//                  )
//                 :
//                 (
//                   <Button
//                   type={"fill"}
//                   size={"large"}
//                   text={"Go to Cart"}
//                   customCss={styles.cart_btn}
//                   to={"/cart"}
//                 />
//                 )
//                 }
//                 </div>
//               </div>
//               <div className={styles.sku_category}>
//                 <div className={styles.sku}>
//                   SKU <span>1117</span>
//                 </div>
//                 <div className={styles.category}>
//                   CATEGORY <span>Living Room, Bedroom</span>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <div className={styles.product_features}>
//             <div className={styles.product_features}>
//               <div className={styles.pf_option}>
//                 <Link className={styles.additional_info}>Additional Info</Link>
//                 <Link className={styles.additional_info}>Questions</Link>
//                 <Link className={styles.additional_info}>Reviews</Link>
//               </div>
//             </div>
//             <div className={styles.customer_reviews}>
//               <div className={styles.cr_title}>Customer Reviews</div>
//               <span className={styles.product_rating}>
//                 {Array.from({ length: Rating}).map((_, i) => (
//             <StarIcon key={i} />
//           ))}

//               </span>
//               <span className={styles.product_reviews}>{Reviews }  Reviews</span>
//               <div className={styles.review_btn}>
//                 <input type="text" placeholder="write review" />
//                 <Button
//                   type={"fill"}
//                   size={"small"}
//                   text={"Write Review"}
//                   customCss={styles.btn}
//                 />
//               </div>
//               <div className={styles.review_details}>
//                 <div className={styles.review_details_inner}>
//                   <div className={styles.review_count}>
//                     <span>{Reviews} reviews</span>
//                     <select>
//                       <option value={"newest"}>Newest</option>
//                       <option value={"newest"}>Newest</option>
//                       <option value={"newest"}>Newest</option>
//                     </select>
//                   </div>
//                   {UserData.map((value, index) => (
//                     <div className={styles.user_info} key={index}>
//                       <div className={styles.user_img}>
//                         <img src={value.imgUrl} alt="user-img" />
//                       </div>
//                       <div className={styles.user_data}>
//                         <div className={styles.user_name}>{value.name}</div>
//                         <div className={styles.review}>
//                           <StarIcon />
//                           <StarIcon />
//                           <StarIcon />
//                           <StarIcon />
//                           <StarIcon />
//                         </div>
//                         <p className={styles.description}>
//                           {value.description}
//                         </p>
//                         <div className={styles.like_reply_btn}>
//                           <button>Like</button>
//                           <button>Reply</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className={styles.load_more_btn}>
//                 <Button btn={true} title={"Load more"} size={"round_btn"} />
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//       <Newsletter BgImg={newsletterImg} isWhite={true} />
//     </Fragment>
//   );
// };

// export default SingleProduct;

// /*
// useEffect yeh tabhi kaam aata he jab page ke bahar se koi cheez lani ho ya bahar ka koi kaam ho
// or ye ek baar to render hoga or pura page render hota he jabki usecallback function apne data ko store kr leta he or jab bhi iski jarurat hoti */
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useContext,
  useRef
} from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import StarIcon from "../../icons/starIcon";
import axios from "axios";
import Button from "../button";
import WishListIcon from "../../icons/wishlistIcons";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/review-user-img.png";
import img2 from "../../assets/images/review-user-img2.png";
import img3 from "../../assets/images/review-user-img3.png";
import img4 from "../../assets/images/review-user-img4.png";
import img5 from "../../assets/images/review-user-img5.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
import Newsletter from "../newsLetter";
import { CartContext } from "../../context/cartProvider";

import newsletterImg from "../../assets/images/newsletter-bg-img02.png";
// import flameIcon from "../../assets/images/flame-icon.png"; // Ensure you have this icon
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample User Data for Reviews
const UserData = [
  {
    imgUrl: img1,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img2,
    name: "Nicolas Jensen",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img3,
    name: "Nicolas Jensen",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img4,
    name: "Nicolas Jensen",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img5,
    name: "Nicolas Jensen",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showGOToCart, setShowGoToCart] = useState(false);
  
  const sliderRef = useRef(null);

  // Fetch product data from API
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setTotalPrice(response.data.price);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setTotalPrice((count * product.price).toFixed(2));
    }
  }, [count, product]);

  // Check if product is already in cart
  useEffect(() => {
    const existingItemIndex = cart.findIndex(
      (item) => item.id === parseInt(id)
    );
    if (existingItemIndex !== -1) {
      setShowGoToCart(true);
    } else {
      setShowGoToCart(false);
    }
  }, [cart, id]);

  // Handle adding product to cart
  const handleAddToCart = (item, newQuantity) => {
    addToCart(item, newQuantity);
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const quantityChange = (type) => {
    if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      handleQuantityChange(id, newQuantity);
      setQuantity(newQuantity); // Update local state as well
    }
  };

  // Product rating and reviews
  let Rating = product?.rating?.rate || 0;
  let Reviews = product?.rating?.count || 0;
  // Slider settings
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true, // Equivalent to infinite
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        const swiper = this;
        swiper.el.addEventListener("mouseenter", () => {
          swiper.autoplay.stop();
        });
        swiper.el.addEventListener("mouseleave", () => {
          swiper.autoplay.start();
        });
      },
    },
  };

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.product_slider}>
              <div className={styles.product_big_img}>
                {product.image && (
                  <Slider {...sliderSettings} ref={sliderRef}>
                    {productImages.map((imgSrc, index) => (
                      <div key={index} className={styles.slider_item}>
                        <div
                          className={`${styles.magnify_container} ${styles.img}`}
                        >
                        <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Product Image",
            isFluidWidth: true,
            src: imgSrc,
          },
          largeImage: {
            src: imgSrc,
            width: 1200, // High resolution for zoom
            height: 1800,
          },
          lensStyle: { backgroundColor: "rgba(0,0,0)" }, // Style for the lens
          enlargedImageContainerDimensions: {
            width: "200%", // Controls the zoom level
            height: "200%", // You can adjust these values for stronger or weaker zoom
          },
          enlargedImagePosition: "over", // Keeps the zoomed image over the original
          isHintEnabled: true,
          shouldHideHintAfterFirstActivation: false,
        }}
      />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                <div className={styles.product_info}>
                  <h5 className={styles.product_new}>NEW</h5>
                  {product.rating > 0 && (
                    <span className={styles.discount_button}>
                      -{product.rating}%
                    </span>
                  )}
                </div>
              </div>
              <Row className={styles.additional_images}>
                {productImages.slice(0, 3).map((imgSrc, index) => (
                  <Col key={index} lg={4} sm={4} xs={4}>
                    <Zoom>
                      <img
                        src={imgSrc}
                        alt={`single product img ${index}`}
                        className={styles.product_img}
                      />
                    </Zoom>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col lg={6}>
            <div className={styles.product_details}>
              <span className={styles.product_rating}>
                {Array.from({ length: Math.floor(Rating) }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </span>
              <span> {Reviews} Reviews</span>

              <h2 className={styles.title}>{product.title}</h2>

              <p>
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <div className={styles.price}>
                ${product.price}
                <del>
                  $
                  {Reviews
                    ? (product.price - (product.price * Reviews) / 100).toFixed(
                        2
                      )
                    : ""}
                </del>
              </div>

              {/* Offer Countdown (Static Example) */}
              <div className={styles.expires_datdline}>
                <div className={styles.expires_date_text}>
                  Offer expires in:
                </div>
                <div className={styles.expires_date}>
                  <div className={styles.expires_date_time}>
                    <div className={styles.title}>02</div>
                    <span>Days</span>
                  </div>
                  <div className={styles.expires_date_time}>
                    <div className={styles.title}>12</div>
                    <span>Hours</span>
                  </div>
                  <div className={styles.expires_date_time}>
                    <div className={styles.title}>45</div>
                    <span>Minutes</span>
                  </div>
                  <div className={styles.expires_date_time}>
                    <div className={styles.title}>05</div>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>

              {/* Additional Product Information */}
              <div className={styles.other_info}>
                <div className={styles.measurements}>
                  Measurements
                  <span>17 1/2x20 5/8 "</span>
                </div>
                <div className={styles.choose_color}>
                  <div className={styles.color_title}>Choose Color</div>
                </div>
                <div className={styles.color_name}>Black</div>
                <div className={styles.color_img}>
                  <img src={product.image} alt="product color" />

                  <img src={product.image} alt="product color" />

                  <img src={product.image} alt="product color" />

                  <img src={product.image} alt="product color" />
                </div>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <div className={styles.wish_cart_btn}>
                <div className={styles.wish_qua}>
                  <div className={styles.product_quotient}>
                    <button onClick={() => quantityChange("minus")}>-</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleInputChange}
                      className={styles.quantity_input}
                    />
                    <button onClick={() => quantityChange("plus")}>+</button>
                  </div>
                  <div className={styles.buttons}>
                    <Button
                      size={"medium"}
                      text={"Wishlist"}
                      customCss={styles.wishlist_btn}
                    />
                    <div className={styles.wishlist_icon}>
                      <WishListIcon />
                    </div>
                  </div>
                </div>
                <div className={styles.add_cart_button}>
                  {!showGOToCart ? (
                    <Button
                      isButton={true}
                      type={"fill"}
                      size={"large"}
                      text={"Add to Cart"}
                      customCss={styles.cart_btn}
                      onClick={() => handleAddToCart(product, quantity)}
                    />
                  ) : (
                    <Button
                      type={"fill"}
                      size={"large"}
                      text={"Go to Cart"}
                      customCss={styles.cart_btn}
                      to={"/cart"}
                    />
                  )}
                </div>
              </div>

              {/* SKU and Category Information */}
              <div className={styles.sku_category}>
                <div className={styles.sku}>
                  SKU <span>1117</span>
                </div>
                <div className={styles.category}>
                  CATEGORY <span>Living Room, Bedroom</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Features and Reviews */}
        <Row>
          <div className={styles.product_features}>
            <div className={styles.pf_option}>
              <Link className={styles.additional_info}>Additional Info</Link>
              <Link className={styles.additional_info}>Questions</Link>
              <Link className={styles.additional_info}>Reviews</Link>
            </div>
          </div>
          <div className={styles.customer_reviews}>
            <div className={styles.cr_title}>Customer Reviews</div>
            <span className={styles.product_rating}>
              {Array.from({ length: Math.floor(Rating) }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className={styles.product_reviews}>{Reviews} Reviews</span>
            <div className={styles.review_btn}>
              <input type="text" placeholder="write review" />
              <Button
                type={"fill"}
                size={"small"}
                text={"Write Review"}
                customCss={styles.btn}
              />
            </div>
            <div className={styles.review_details}>
              <div className={styles.review_details_inner}>
                <div className={styles.review_count}>
                  <span>{Reviews} reviews</span>
                  <select>
                    <option value={"newest"}>Newest</option>
                    <option value={"highest"}>Highest Rating</option>
                    <option value={"lowest"}>Lowest Rating</option>
                  </select>
                </div>
                {UserData.map((value, index) => (
                  <div className={styles.user_info} key={index}>
                    <div className={styles.user_img}>
                      <img src={value.imgUrl} alt="user-img" />
                    </div>
                    <div className={styles.user_data}>
                      <div className={styles.user_name}>{value.name}</div>
                      <div className={styles.review}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <p className={styles.description}>{value.description}</p>
                      <div className={styles.like_reply_btn}>
                        <button>Like</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.load_more_btn}>
              <Button btn={true} title={"Load more"} size={"round_btn"} />
            </div>
          </div>
        </Row>
      </Container>

      {/* Newsletter Section */}
      <Newsletter BgImg={newsletterImg} isWhite={true} />
    </Fragment>
  );
};

export default SingleProduct;
