import { Fragment } from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Shop from "./pages/shop";
import Newsletter from "./components/newsLetter";
import NBg from "./assets/images/newsletter-bg-img02.png";
import CartIcon from "./icons/cart";
import CartItem from "./components/cartItem";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Cart from "./pages/cart";
import Complete from "./pages/complete";
import SingleProduct from "./components/singleProduct";
import CheckOut from "./components/checkOut";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import { UserDataProvider } from "./context/userDataProvider";

function App() {
  return (
    <Fragment>
      <UserDataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="singleProduct/:id" element={<SingleProduct />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Route>
        </Routes>
      </UserDataProvider>
    </Fragment>
  );  
}

export default App;
