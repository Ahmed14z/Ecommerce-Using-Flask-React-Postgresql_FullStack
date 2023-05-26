import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import { Product } from "./product";
import "./shop.css";
import { Navbar } from "../../navbar";

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <div className="shop">
        <div className="col pad"></div>
        <div>
          <h1 className="playful-underline shopTitle">Mansy's Shop</h1>
        </div>
        <div className="templateContainer">
          <div className="searchInput_Container">
            <i className="searchIcon fas fa-search"></i>
            <input
              id="searchInput"
              type="text"
              className="curve"
              placeholder="Search here..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="products">
            {PRODUCTS.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.productName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="product" key={val.id}>
                  <Product data={val} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
