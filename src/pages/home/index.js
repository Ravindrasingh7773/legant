import React,{Fragment, useEffect, useState, useCallback } from "react" 
import HeroSection from "../../components/heroSection"
import SliderSection from "../../components/sliderSection"
import CategorySection from "../../components/categorySection"
import BannerSection from "../../components/bannerSection" 
import ShopCollection from "../../components/shopCollection"
import ArticalSection from "../../components/articalSection" 
import Newsletter from "../../components/newsLetter"
import NewsletterImg from "../../assets/images/newsletter-bg-img.png"
import NewsFeed from "../../components/newsFeed"

const Home =()=>{
      const [products, setProducts] = useState([]);
      const [categories, setCategories] = useState([]); 

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

  const getCategories = useCallback((limit) => {
    fetch(`https://api.escuelajs.co/api/v1/categories?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json); 
      })
      .catch((error) => console.error("Error fetching products:", error)); // Handle errors
  }, []);

  useEffect(() => {
    getCategories(6);   
  }, [getCategories]);

    return(
        <Fragment>  
      <HeroSection />
      <SliderSection title={"Features"} ProductItems={products} /> 
      <CategorySection CategoryItems={categories} />
      <BannerSection />
      <ShopCollection />
      <ArticalSection />
      <Newsletter BgImg={NewsletterImg} />
      <NewsFeed />
        </Fragment>
    );
}
export default Home;
 