import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="description">
      <div className="image-container">
        <Link to={`/product/${id}`}>
          <img src={productImage} alt={productName} />
        </Link>
      </div>
      <p>
        <b>{productName}</b>
      </p>
      <p>${price}</p>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
