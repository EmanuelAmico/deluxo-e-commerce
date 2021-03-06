import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setOrder } from "../redux/order";
import API_URL from "../config/env";
import generateNotification from "../utils/generateNotification";
import "../assets/styles/components/Checkout.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";

const Checkout = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [disableButtons, setDisableButtons] = useState(false);

  if (!order.products) {
    history.push("/cart");
    return null;
  }

  const handlePay = async () => {
    try {
      setDisableButtons(true);
      await axios.put(
        `${API_URL}/api/orders/${localStorage.getItem("orderId")}`,
        {
          state: "fulfilled",
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      localStorage.removeItem("shopcartId");
      localStorage.removeItem("orderId");
      history.push(`/orders/user/${user.id}`);
      dispatch(setOrder({}));
      generateNotification("success", "Success!", "Order is completed.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      setDisableButtons(true);
      await axios.delete(
        `${API_URL}/api/orders/${localStorage.getItem("orderId")}`
      );
      localStorage.removeItem("shopcartId");
      localStorage.removeItem("orderId");
      history.push("/");
      dispatch(setOrder({}));
      generateNotification("success", "Success!", "Order was cancelled.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container pt-5 text-primary checkout-container">
      <div className="row mt-3">
        <table className="table  text-center text-light bg-dark">
          <thead>
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Products quantity</th>
              <th scope="col">Total price</th>
              <th scope="col">Payment Method</th>
              <th scope="col">State</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <th scope="row">{order.products.length}</th>
              <td>{`$ ${order.total_price.toFixed(2)}`}</td>
              <td>{order.payment_method}</td>
              <td>{order.state}</td>
              <td>
                <button
                  onClick={handlePay}
                  className="btn btn-outline-success btn-lg me-2"
                  disabled={disableButtons}
                >
                  Pay Order
                </button>
                <button
                  onClick={handleCancel}
                  className="btn btn-outline-danger btn-lg"
                  disabled={disableButtons}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: {`$ ${order.total_price.toFixed(2)}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
