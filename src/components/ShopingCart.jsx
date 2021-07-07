import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { productsAddedToCartFromDb, setProductsAddedToCart } from "../redux/productsAdded";
import { setOrder } from "../redux/order";
import axios from 'axios'

export default function ShoppingCart() {
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  const user = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    if(!productsInCart.length)
      dispatch(productsAddedToCartFromDb(localStorage.getItem('shopcartId')))
  }, [])

  const total = function total() {
    let totalPrice = 0;
    console.log("estoy adentro de laa funcion total()", productsInCart)
    productsInCart.map((product) => {
      totalPrice += product.price * product.quantity;
    });
    console.log(totalPrice)
    return totalPrice;
  }

  function decrease (product) {
    const productsInCartCopy = []
    productsInCart.forEach(product => {
      productsInCartCopy.push({...product})
    });
    productsInCartCopy.forEach(copyProduct => {
      if (copyProduct.id == product.id) {
        if(copyProduct.quantity === 1)
          handleRemoveCartItem(copyProduct.id)
        if (copyProduct.quantity > 1) {
          copyProduct.quantity -= 1
          dispatch(setProductsAddedToCart(productsInCartCopy))
        }
      }
    })
  }

  function increase (product) {
    const productsInCartCopy = []
    productsInCart.forEach(product => {
      productsInCartCopy.push({...product})
    });
    productsInCartCopy.forEach(copyProduct => {
      if (copyProduct.id == product.id) {
        copyProduct.quantity += 1
      }
    })
    dispatch(setProductsAddedToCart(productsInCartCopy))
  }

  const handleRemoveCartItem = (id) => {
    const products = productsInCart.filter((product) => product.id !== id);
    dispatch(setProductsAddedToCart(products));
  };

  const handleOnClickCheckOut = async () => {
    try {
      if(!user.isLoggedIn)
        history.push("/login")
      /* Genera Carrito nuevo */
      const res = await axios.post('/api/shopcarts', productsInCart)
      const shopcart = res.datatotal
      const shopcartId = shopcart[0].shopCartId
      localStorage.setItem('shopcartId', shopcartId)
      dispatch(setProductsAddedToCart([]))
      dispatch(setOrder({state: 'toPay', payment_method: "Cash", total_price: total(), products: productsInCart}))
      history.push("/checkout")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-2 text-primary">
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
                    className="btn btn-primary btn-lg"
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => increase(product)}
                    className="btn btn-primary btn-lg"
                    size="sm"
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleRemoveCartItem(product.id)}
                    className="btn btn-danger btn-lg"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        {productsInCart.length ? (
          <button className="btn btn-danger btn-lg" onClick={handleOnClickCheckOut}>Checkout</button>
        ) : null}
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {`$ ${total()}`}</h4>
        </div>
      </div>
    </div>
  );
}
