import { product } from "prelude-ls";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../assets/static/img/deluxo-48.png"
import { Link } from "react-router-dom"

const Checkout = () => {

  const order = useSelector(state => state.order)

  const history = useHistory()

  const handlePay = (paymentMethod) => {
    history.push('/')
  }

  return (
    <div className="container mt-2 text-primary">
      <div className="row mt-3">
        <table className="table  text-center text-light bg-dark">
          <thead>
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Products quantity</th>
              <th scope="col">Total price</th>
              <th scope="col">Payment Method</th>
              <th scope="col">State</th>
              <th scope="col">Pay</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row">1</th>
                <th scope="row">
                  {order.products.length}
                </th>
                <td>{order.total_price}</td>
                <td>{order.payment_method}</td>
                <td>{order.state}</td>
                <td>
                  <button
                    onClick={() => handlePay(paymentMethod)}
                    className="btn btn-danger btn-lg"
                  >
                    Pay
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <Link
            className="btn btn-danger btn-lg"
            to={"/"}
          >
            Pay
          </Link>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {`$ ${order.total_price}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
