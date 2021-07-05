
import React from "react";
// import "../assets/styles/components/cart.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from "react-redux";
import { setProductsAddedToCart } from "../redux/productsAdded";

export default function ShoppingCart() {
  const productsInCart = useSelector((state) => state.productsAddedToCart);
  console.log(productsInCart);

  // function total() {
  //   let totalPrice = 0;
  //   productsInCart.map((product) => {
  //     totalPrice += product.price * 2;
  //   });
  //   return totalPrice
  // }

  const dispatch = useDispatch()

  function total() {
    let totalPrice = 0
    productsInCart.map((product) => {
      totalPrice += product.price * product.quantity
    })
    return totalPrice
  }

  const handleRemoveCartItem = (id) => {
    const products = productsInCart.filter(product => product.id !== id)
    dispatch(setProductsAddedToCart(products))
  }

  return (
    <div className="container mt-2">
      <div className="row mt-3">
        <table className="table  text-center">
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
                    /* onClick={() => decrease(i)} */
                    className="btn btn-primary btn-sm"
                  >
                    -
                  </button>
                  {/* {product.quantity} */}
                  <button
                    // onClick={() => increase(i)}
                    className="btn btn-primary btn-sm"
                    size="sm"
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleRemoveCartItem(product.id)}
                    className="btn btn-danger"
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
        <div className="col text-center">
          <h4>TOTAL: {`$ ${total()}`}</h4>
        </div>
      </div>
    </div>
  );
}

// function removetocart(item) {
//   products.map((i) => {
//     if (i.id == item.id) {
//       i.cart = false
//     }
//   })
//   setCart(cart2)

// }

