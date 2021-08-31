import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  productsAddedToCartFromDb,
  setProductsAddedToCart,
} from "../redux/productsAdded";
import { setOrder } from "../redux/order";
import axios from "axios";
import "../assets/styles/components/ShoppingCart.scss";
import API_URL from "../config/env";

export default function ShoppingCart() {
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [disableButtons, setDisableButtons] = useState(false);

  useEffect(() => {
    if (!productsInCart.length && user.id)
      dispatch(productsAddedToCartFromDb(user.id));
  }, [user]);

  const total = function total() {
    let totalPrice = 0;
    productsInCart.map((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  function decrease(product) {
    const productsInCartCopy = [];
    productsInCart.forEach((product) => {
      productsInCartCopy.push({ ...product });
    });
    productsInCartCopy.forEach((copyProduct) => {
      if (copyProduct.id == product.id) {
        if (copyProduct.quantity === 1) handleRemoveCartItem(copyProduct.id);
        if (copyProduct.quantity > 1) {
          copyProduct.quantity -= 1;
          dispatch(setProductsAddedToCart(productsInCartCopy));
        }
      }
    });
  }

  function increase(product) {
    const productsInCartCopy = [];
    productsInCart.forEach((product) => {
      productsInCartCopy.push({ ...product });
    });
    productsInCartCopy.forEach((copyProduct) => {
      if (copyProduct.id == product.id) {
        copyProduct.quantity += 1;
      }
    });
    dispatch(setProductsAddedToCart(productsInCartCopy));
  }

  const handleRemoveCartItem = async (id) => {
    try {
      const products = productsInCart.filter((product) => product.id !== id);
      if (productsInCart[0].shop_cart_items)
        await axios.delete(
          `${API_URL}/api/shopcarts/${localStorage.getItem(
            "shopcartId"
          )}/products/${id}`
        );
      dispatch(setProductsAddedToCart(products));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClickCheckOut = async () => {
    try {
      setDisableButtons(true);
      if (!user.isLoggedIn) return history.push("/login");
      if (localStorage.getItem("orderId")) {
        await axios.put(
          `${API_URL}/api/shopcarts/${localStorage.getItem("shopcartId")}`,
          productsInCart
        );
        dispatch(
          setOrder({
            state: "Payment pending",
            payment_method: "Cash",
            total_price: total(),
            products: productsInCart,
          })
        );
        return history.push("/checkout");
      }
      /* Genera Carrito nuevo */
      const res = await axios.post(API_URL + "/api/shopcarts", productsInCart);
      const shopcart = res.data;
      const shopcartId = shopcart[0].shopCartId;
      localStorage.setItem("shopcartId", shopcartId);
      const response = await axios.post(
        API_URL + "/api/orders",
        { payment_method: "Cash", state: "Payment pending", shopcartId },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const order = response.data;
      localStorage.setItem("orderId", order.id);
      dispatch(setProductsAddedToCart([]));
      dispatch(
        setOrder({
          state: "Payment pending",
          payment_method: "Cash",
          total_price: total(),
          products: productsInCart,
        })
      );
      history.push("/checkout");
    } catch (error) {
      console.log(error);
    }
  };

  return productsInCart.length ? (
    <div className="container pt-5 text-primary shopcart">
      <div className="row mt-3">
        <table className="table  text-center text-light bg-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {productsInCart.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={product.image} style={{ width: "4rem" }} />
                </th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => decrease(product)}
                    className="btn btn-outline-primary border-circle btn-lg mx-3"
                    disabled={disableButtons}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-lg mx-3"
                    size="sm"
                    disabled={disableButtons}
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleRemoveCartItem(product.id)}
                    className="btn btn-outline-danger btn-lg"
                    disabled={disableButtons}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end pe-4 me-2">
        {productsInCart.length ? (
          <>
            <h4 className="w-100 mb-0 d-flex justify-content-end align-items-center pe-4">
              TOTAL: {`$ ${total().toFixed(2)}`}
            </h4>
            <button
              className="btn btn-outline-success btn-lg"
              onClick={handleOnClickCheckOut}
              disabled={disableButtons}
            >
              Checkout
            </button>
          </>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="container no-products d-flex justify-content-center align-items-center">
      <div className="row-md-12 d-flex flex-column justify-content-center h-75 no-products-bg">
        <h2 className="fs-1 py-2">Oops!..</h2>
        <h2 className="no-products-text">
          The are no products in your cart right now.
        </h2>
      </div>
    </div>
  );
}
