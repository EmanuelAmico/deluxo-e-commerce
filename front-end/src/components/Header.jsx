import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../redux/user";
import "../assets/styles/components/Header.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";
import { setOrders } from "../redux/orders";
import API_URL from "../config/env";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(async () => {
    try {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const res = await axios.get(API_URL + "/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = res.data;
        dispatch(setUser({ ...user, token, isLoggedIn: true }));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("shopcartId");
    localStorage.removeItem("orderId");
    dispatch(
      setUser({
        id: null,
        email: null,
        full_name: null,
        first_name: null,
        last_name: null,
        user_address: null,
        shipping_address: null,
        phone_number: null,
        token: null,
        isLoggedIn: false,
      })
    );
    dispatch(setProductsAddedToCart([]));
    dispatch(setOrders([]));
    history.push("/products");
  };

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Shopping Cart</Link>
        {user.isLoggedIn ? (
          <>
            <Link to="/user">Welcome: {user.full_name}</Link>
            <button onClick={handleLogOut}> Logout </button>
          </>
        ) : (
          <>
            <Link to="/login"> Login </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
