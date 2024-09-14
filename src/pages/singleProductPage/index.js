import React, { Fragment,useCallback,useEffect,useState } from "react";
import styles from "./style.module.css";
import { useNavigate,useParams } from "react-router-dom";
import SingleProduct from "../../components/singleProduct";

const SingleProductPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState({});

  const getProduct = useCallback(
    async (productId) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        setProduct(json);
        console.log(json)
      } catch (error) {
        console.error("Error fetching product:", error);
        nav("/");
      }
    },
    [nav]
  );

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);
  console.log(product)
  return (
    <Fragment>
      {product.map((item, i) => {
        <SingleProduct
          key={i}
          Img={item.image}
          title={item.title}
          price={item.price}
          disc={item.description}
          Rating={item.rating.rate}
          id={item.id}
        />;
      })}
    </Fragment>
  );
};
// Img,title,price,disc,Rating
export default SingleProductPage;
