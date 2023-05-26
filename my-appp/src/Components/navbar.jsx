import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop" className="nav-link shop-link">
          Shop
        </Link>
        <Link
          to="/contact"
          className="nav-link profile-link"
          state={{ data: props.data }}
        >
          Profile
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <div className="logout-btn">
        <Link to="/" className="btn btn-danger">
          Log Out
        </Link>
      </div>
    </div>
  );
};
