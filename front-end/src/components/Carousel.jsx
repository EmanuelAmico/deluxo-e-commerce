import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showProduct,
  selectProductsByCategory,
  selectProductsBySearch,
  clearSelectedProduct,
} from "../redux/products";
import { Link, useHistory, useLocation } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";
import { showCategories } from "../redux/categories";
import generateNotification from "../utils/generateNotification";
import queryString from "query-string";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Carousel = () => {
  const { products } = useSelector((state) => state.products);
  const { selectedProduct } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  const categories = useSelector((state) => state.categories);
  const categoriesDivRef = useRef(null);
  const location = useLocation();
  const query = queryString.parse(location.search);
  const history = useHistory();
  const [searchString, setSearchString] = useState(query.search);

  useEffect(() => {
    if (Object.keys(selectedProduct).length) {
      dispatch(clearSelectedProduct());
    }
    if (!categories.length) {
      dispatch(showCategories());
    }
    if (query.category === "All" || !Object.keys(query).length) {
      dispatch(showProduct());
    } else if (query.search) {
      dispatch(selectProductsBySearch(query.search));
    } else {
      dispatch(selectProductsByCategory(query.category));
    }
    window.scroll({ top: 0 });
  }, [query.category]);

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
        categoryButton.classList.add("focused");
      }
    }
    const type = e.target.attributes.btn_type.value;
    const filter = e.target.name;
    history.push(`/products?${type}=${filter}`);
  }

  return (
    <div className={products.length > 5 ? null : "vh-100"}>
      <div className="categories" ref={categoriesDivRef}>
        {searchString && (
          <button
            name={searchString}
            btn_type="search"
            onClick={handleClick}
            className={
              query.search ? "categoryButton focused" : "categoryButton"
            }
          >
            Search
          </button>
        )}
        <button
          name="All"
          onClick={handleClick}
          btn_type="category"
          className={
            query.category === "All" || !Object.keys(query).length
              ? "categoryButton focused"
              : "categoryButton"
          }
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            name={category}
            btn_type="category"
            onClick={handleClick}
            className={
              query.category === category
                ? "categoryButton focused"
                : "categoryButton"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="wrapper">
        <TransitionGroup className="even-columns">
          {products.length ? (
            products.map((product) => (
              <CSSTransition key={product.id} timeout={1000} classNames="item">
                <div className="prodCard">
                  <Link to={`/products/${product.id}`}>
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
              </CSSTransition>
            ))
          ) : (
            <CSSTransition timeout={1000} classNames="item">
              <div className="container no-products-match d-flex justify-content-center align-items-center">
                <div className="row-md-12 d-flex flex-column justify-content-center h-75 no-products-bg">
                  <h2 className="fs-1 py-2">Oops!..</h2>
                  <h2 className="no-products-text">
                    No product matched with that filter
                  </h2>
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Carousel;
