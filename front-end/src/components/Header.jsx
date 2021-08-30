import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../redux/user";
import "../assets/styles/components/Header.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";
import { setOrders } from "../redux/orders";
import API_URL from "../config/env";
import generateNotification from "../utils/generateNotification";

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
    localStorage.removeItem("userToken");
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
    generateNotification("success", "Success!", "You logged out.");
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" title="home">
          <svg
            id="logoHeader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 387.15 180.12"
          >
            <ellipse
              cx="194"
              cy="91.19"
              rx="165.59"
              ry="82.32"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></ellipse>
            <path
              d="M309.44,52.05c26.32,19.51,41.78,43.31,41.78,69s-15.39,49.39-41.6,68.87"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M138.18,192.92c-28.73-20-45.76-44.9-45.76-71.86s17.07-51.9,45.86-71.93"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              data-name="lv"
              d="M260.84,41.35C289.36,64,306.24,92,306.24,122.41c0,28.91-15.28,55.7-41.33,77.73"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              data-name="rv"
              d="M184.19,201.52c-27.06-22.28-43-49.6-43-79.11,0-30.93,17.5-59.44,47-82.28"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              data-name="lv"
              d="M223.55,38.64c21.13,23.21,33.54,51.51,33.54,82,0,30.81-12.63,59.33-34.1,82.66"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              data-name="rv"
              d="M214.12,203.38c-21.54-23.35-34.21-51.92-34.21-82.78,0-30.44,12.34-58.67,33.36-81.85"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M291.19,46.92c-20.7,3.93-45.49,6.22-72.14,6.22s-51.49-2.29-72.2-6.23"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M353.67,73.11C320,88.87,270.71,98.8,215.81,98.8c-52.82,0-100.43-9.2-134-23.92"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M134.25,191.78c22.87-5.58,52.47-8.95,84.8-8.95s61.84,3.36,84.7,8.93"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <path
              d="M90.28,172.81c32.85-12.68,77-20.45,125.53-20.45,50.45,0,96.16,8.39,129.37,22"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <g id="deluxo-txt">
              <path
                d="M59.07,158.16H27.61L41,86.09H69.79a48.29,48.29,0,0,1,12.46,1.35A12.38,12.38,0,0,1,89.46,92Q92,95.71,92,102c0,.22,0,1.51-.07,3.87s-.8,7.24-2.25,14.6Q87.8,131,86.36,136.86a38.19,38.19,0,0,1-3.21,9,21.47,21.47,0,0,1-4.64,5.75,22.26,22.26,0,0,1-8.07,4.9A35.06,35.06,0,0,1,59.07,158.16Zm-.42-17.26q2.41,0,3.48-3c.47-1.36.95-3.11,1.46-5.25s1.19-5.41,2-9.83q2.08-11.92,2.09-14.95a3.67,3.67,0,0,0-.65-2.57,2.54,2.54,0,0,0-1.85-.63H62.13l-6.82,36.2Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
              <path
                d="M160.37,158.16H85.2L98.56,86.09h73.83l-3.71,20H119.53l-1.16,6.31H167.7l-3.53,19H114.85l-1.3,7.1H164Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
              <path
                d="M221.85,158.16l-58.42-.37L176.8,85.72l35.17.37-9.7,52.11h23.3Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
              <path
                d="M251.92,159a38.75,38.75,0,0,1-13.92-2.3,16.33,16.33,0,0,1-8.77-7.26,15.91,15.91,0,0,1-1.85-7.94,28.7,28.7,0,0,1,.46-5l9.37-50.4H262l-1,5.29q-3.06,16.71-5.25,28.26l-2.69,14.62c-.31,1.73-.49,2.68-.55,2.83a6.26,6.26,0,0,0-.1,1.07,2.38,2.38,0,0,0,.51,1.58,2.49,2.49,0,0,0,1.95.6,3.3,3.3,0,0,0,3.62-3.16c.13-.58.66-3.43,1.6-8.53l3.25-17.5q1.83-9.84,3.23-17.45L268,86.09h25.1l-9.42,50.72q-2.22,11.06-10.74,16.59T251.92,159Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
              <path
                d="M344.13,158.16H317.3l-2.73-10.3-6.45,10.3H281.3l25.1-37.4L295.54,86.09h26.78l2.73,11.84,7.24-11.84H357.4l-24.18,38.1Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
              <path
                d="M373.55,159.23q-8.69,0-14.11-2-10.53-3.84-10.53-14.57v-1q0-5.1,2.78-19.77,1.21-6.87,2.14-11a48.46,48.46,0,0,1,2.08-7.15,26.88,26.88,0,0,1,10-12.85q8-5.52,21.35-5.53,16.47,0,22.08,8.08a16.87,16.87,0,0,1,2.83,9.79,49.77,49.77,0,0,1-.55,6.89c-.37,2.62-1,6.3-1.9,11.07q-1.49,7.84-2.63,12.34a62.67,62.67,0,0,1-2.29,7.43Q398.65,159.23,373.55,159.23Zm3.66-18.8a3.45,3.45,0,0,0,3.62-2.6q2.42-7.23,5.2-24.4a50.75,50.75,0,0,0,.7-6,4.77,4.77,0,0,0-.52-2.32c-.34-.62-1.09-.93-2.27-.93a3.33,3.33,0,0,0-2.57.93,7.53,7.53,0,0,0-1.47,2.79q-1.15,3.94-3.11,14.34a103.8,103.8,0,0,0-2.18,15.73v.18a2.7,2.7,0,0,0,.51,1.6A2.44,2.44,0,0,0,377.21,140.43Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
              ></path>
            </g>
            <path
              d="M397,54.68s0,13.24-10.43,13.24C397,67.92,397,81.09,397,81.09s0-13.17,10.42-13.17C397,67.92,397,54.68,397,54.68Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
            ></path>
            <path
              d="M62.55,188s0,11-8.65,11c8.65,0,8.65,10.93,8.65,10.93S62.55,199,71.2,199C62.55,199,62.55,188,62.55,188Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
            ></path>
            <path
              d="M41.4,163.44s0,20.83-16.4,20.83c16.4,0,16.4,20.72,16.4,20.72s0-20.72,16.4-20.72C41.4,184.27,41.4,163.44,41.4,163.44Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
            ></path>
            <path
              d="M377.33,29.83s0,19.71-15.51,19.71c15.51,0,15.51,19.61,15.51,19.61s0-19.61,15.52-19.61C377.33,49.54,377.33,29.83,377.33,29.83Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="links">
        {user.isLoggedIn ? (
          <Link to="/user">Welcome: {user.full_name}</Link>
        ) : null}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Shopping Cart</Link>
        {user.isLoggedIn ? (
          <button onClick={handleLogOut}> Logout </button>
        ) : (
          <>
            <Link to="/login">Log In</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
