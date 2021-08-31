import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUserCompletedOrders } from "../redux/orders";
import { useEffect } from "react";
import "../assets/styles/components/Orders.scss";

const Orders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    if (user.id) dispatch(showUserCompletedOrders(user.id));
  }, [user]);

  return orders.length ? (
    <>
      <h2 className="no-products-text py-5 text-center">Orders</h2>
      <div className="container pt-5 text-primary orders">
        <div className="row mt-3">
          <table className="table  text-center text-light bg-dark">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Payment Method</th>
                <th scope="col">State</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td scope="row">{order.id}</td>
                  <td scope="row">{order.payment_method}</td>
                  <td scope="row">{order.state}</td>
                  <td scope="row">{order.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ) : (
    <div className="container no-products d-flex justify-content-center align-items-center">
      <div className="row-md-12 d-flex flex-column justify-content-center h-75 no-products-bg">
        <h2 className="fs-1 py-2">Oops!..</h2>
        <h2 className="no-products-text">
          You do not have any orders right now.
        </h2>
      </div>
    </div>
  );
};

export default Orders;
