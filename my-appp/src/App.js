import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/pages/LandingPage";
import LoginPage from "./Components/pages/LoginPage";
import RegisterPage from "./Components/pages/RegisterPage";
import { Shop } from "./Components/pages/shop/shop";
import { Contact } from "./Components/pages/contact";
import { Cart } from "./Components/pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { UserContextProvider } from "./Components/pages/UserContext";
import { ProductDetails } from "./Components/pages/shop/ProductDetails";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col cust">
          <h1 className="custs">RESTFUL API Assignment</h1>
        </div>
      </div>

      <UserContextProvider>
        <ShopContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
