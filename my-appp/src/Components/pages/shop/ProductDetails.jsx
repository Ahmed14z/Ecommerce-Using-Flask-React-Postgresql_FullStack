import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import { Navbar } from "../../navbar";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import "./product-details.css"; // Import the new CSS file

export const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((val) => val.id === Number(id));
  const { addToCart, cartItems } = useContext(ShopContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { productName, price, description, productImage } = product;
  const cartItemCount = cartItems[product.id];

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <>
      <Navbar />
      <div className="top-right"></div>
      <div className="product-details">
        <div className="product-content">
          <div className="product-image">
            <img src={productImage} alt={productName} />
          </div>
          <div className="product-info">
            <h2 className="product-title">{productName}</h2>
            <p className="product-price">Price: ${price}</p>
            <div className="product-description">
              <h3>About this item:</h3>
              <p>{description}</p>
            </div>
            <button className="addToCartBttn" onClick={handleAddToCart}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
