import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
import "../assets/styles/components/SingleCard.scss";
import { selectProduct } from "../redux/products";
import { setProductsAddedToCart } from "../redux/productsAdded";
import generateNotification from "../utils/generateNotification";

function SingleCard() {
  const { selectedProduct } = useSelector((store) => store.products);
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { productId } = match.params;

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

  useEffect(() => {
    dispatch(selectProduct(productId));
  }, [productId]);

  return (
    <div className="container text-dark singleCard">
      <div className="row d-flex justify-content-center align-items-center w-100 g-0">
        <div className="col-md-6 h-100 d-flex align-items-center p-5">
          <img
            className="cardImg"
            src={selectedProduct.image}
            alt="t-shirt"
          ></img>
        </div>
        <div className="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
          <div>
            <h2 className="mb-4 text-light outline-dark singleCard__title">
              {selectedProduct.name}
            </h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Price:</strong> ${selectedProduct.price}
              </li>
              <li className="list-group-item">
                <strong>Stock:</strong> {selectedProduct.stock} units left
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {selectedProduct.description}
              </li>
            </ul>
          </div>
          <div className="align-self-end mt-4 w-25 d-flex justify-content-end">
            <button
              onClick={() => addProduct(selectedProduct)}
              type="submit"
              className="prodBtn ms-0 me-0"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
