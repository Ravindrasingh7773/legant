import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { CartProvider } from "./context/cartProvider";
import "./index.css";
import { AddressProvider } from "./context/addressProvider";
import { SnackBarProvider } from "./context/snackBarProvider";
// import { UserContext } from "./context/userDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AddressProvider>
      <SnackBarProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SnackBarProvider>
    </AddressProvider>
  </BrowserRouter>
);

reportWebVitals();
