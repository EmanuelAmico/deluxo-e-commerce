import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showProduct,
  selectProduct,
  selectProductsByCategory,
} from "../redux/products";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";
import { showCategories } from "../redux/categories";
import generateNotification from "../utils/generateNotification";

const Carousel = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  const categories = useSelector((state) => state.categories);
  const categoriesDivRef = useRef(null);

  useEffect(() => {
    dispatch(showProduct());
    dispatch(showCategories());
  }, []);

  function addProduct(product) {
    const alreadyInCart = productsInCart.map(
      (productInCart) => productInCart.id == product.id
    );
    // alreadyInCart -> [false, false, false, true, false]
    if (alreadyInCart.includes(true)) {
      const i = alreadyInCart.indexOf(true);
      const productsInCartCopy = [];
      productsInCart.forEach((product) => {
        productsInCartCopy.push({ ...product });
      });
      productsInCartCopy[i].quantity++;
      dispatch(setProductsAddedToCart(productsInCartCopy));
    } else {
      const productCopy = { ...product, quantity: 1 };
      dispatch(setProductsAddedToCart([...productsInCart, productCopy]));
    }
    generateNotification(
      "success",
      "Success!",
      "The product was added to cart"
    );
  }

  function handleClick(e) {
    // Style
    for (const categoryButton of categoriesDivRef.current.children) {
      if (categoryButton !== e.target) {
        categoryButton.classList.remove("focused");
      } else {
        console.log(categoryButton.classList);
        categoryButton.classList.add("focused");
      }
    }
    const category = e.target.textContent;
    dispatch(selectProductsByCategory(category));
  }

  return (
    <div className={products.length ? null : "vh-100"}>
      <div className="categories" ref={categoriesDivRef}>
        {categories.map((category) => (
          <button
            key={category}
            name={category}
            onClick={handleClick}
            className="categoryButton"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="wrapper">
        <div className="even-columns">
          {products.map((product) => (
            <div className="prodCard" key={product.id}>
              <Link
                onClick={() => dispatch(selectProduct(product.id))}
                to={`/products/${product.id}`}
              >
                <div className="col">
                  <Card product={product} />
                </div>
              </Link>

              <div className="btnDiv">
                <button
                  onClick={() => addProduct(product)}
                  type="submit"
                  className="prodBtn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
