import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link, useHistory } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { useDispatch } from "react-redux";
import generateNotification from "../utils/generateNotification";
import "../assets/styles/components/Register.scss";
import API_URL from "../config/env";

function Register() {
  const history = useHistory();

  const [formRegisterValues, handleInputChange] = useForm({
    user_name: "",
    first_name: "",
    last_name: "",
    user_address: "",
    shipping_address: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const {
    user_name,
    first_name,
    password,
    last_name,
    user_address,
    shipping_address,
    phone_number,
    email,
  } = formRegisterValues;

  const [emailMsg, setEmailMsg] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMsg("Valid Email!");
    } else {
      setEmailMsg("enter valid Email!");
    }
    handleInputChange(e);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(API_URL + "/api/register", formRegisterValues);
      history.push("/login");
      generateNotification(
        "success",
        "Success!",
        "The user was created successfully"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="registerBody">
      <div id="star-div">
        <svg id="svg-parent">
          <g className="Stars-1">
            <g id="stars-group-1">
              <g id="someStars">
                <path
                  fill="#9DEAA7"
                  id="star-skinny"
                  d="M74.65,87.35c-14.13,0-14.13.42-14.13,14.13,0-14,0-14.13-14.12-14.13,14,0,14.12,0,14.12-14.12C60.52,86.94,60.52,87.35,74.65,87.35Z"
                ></path>
                <path
                  fill="#9595E9"
                  id="star-skinny-2"
                  data-name="star-skinny"
                  d="M335.14,50.12c-13.36,0-13.36.39-13.36,13.36,0-13.29,0-13.36-13.36-13.36,13.28,0,13.36,0,13.36-13.36C321.78,49.73,321.78,50.12,335.14,50.12Z"
                />
                <path
                  fill="#EFAA5B"
                  id="star-fat"
                  d="M572.45,78.84a6.59,6.59,0,0,0-5.61,5.6.06.06,0,0,1-.12,0,6.58,6.58,0,0,0-5.6-5.6.06.06,0,0,1,0-.12,6.58,6.58,0,0,0,5.6-5.6.06.06,0,0,1,.12,0,6.59,6.59,0,0,0,5.61,5.6A.06.06,0,0,1,572.45,78.84Z"
                />
              </g>

              <g id="someOtherStars">
                <path
                  fill="#EA9BB6"
                  id="star-fat-3"
                  data-name="star-fat"
                  d="M502.86,168a6.7,6.7,0,0,0-5.71,5.71.07.07,0,0,1-.13,0,6.7,6.7,0,0,0-5.7-5.71.06.06,0,0,1,0-.12,6.7,6.7,0,0,0,5.7-5.71.07.07,0,0,1,.13,0,6.7,6.7,0,0,0,5.71,5.71A.06.06,0,0,1,502.86,168Z"
                />
              </g>
            </g>
          </g>

          <g className="Stars-2">
            <g id="stars-group-2">
              <g id="anotherStars">
                <path
                  fill="#EA9BB6"
                  id="star-skinny-5"
                  data-name="star-skinny"
                  d="M403.1,193.47c-10.92,0-10.92.32-10.92,10.91,0-10.85,0-10.91-10.91-10.91,10.85,0,10.91,0,10.91-10.92C392.18,193.14,392.18,193.47,403.1,193.47Z"
                />{" "}
              </g>

              <g id="otherStars">
                <path
                  fill="#FFB9B9"
                  id="star-fat-5"
                  data-name="star-fat"
                  d="M167.23,52.88a6.57,6.57,0,0,0-5.6,5.6.06.06,0,0,1-.12,0,6.57,6.57,0,0,0-5.6-5.6.07.07,0,0,1,0-.13,6.58,6.58,0,0,0,5.6-5.6.06.06,0,0,1,.12,0,6.58,6.58,0,0,0,5.6,5.6A.07.07,0,0,1,167.23,52.88Z"
                />
                <path
                  fill="#9595E9"
                  id="star-fat-6"
                  data-name="star-fat"
                  d="M77.49,198a15.32,15.32,0,0,0-13.07,13.07.15.15,0,0,1-.29,0A15.34,15.34,0,0,0,51.05,198a.15.15,0,0,1,0-.29,15.36,15.36,0,0,0,13.08-13.08.15.15,0,0,1,.29,0,15.34,15.34,0,0,0,13.07,13.08A.15.15,0,0,1,77.49,198Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="welcome-text">Welcome Friend!</div>

          <div className="createAcc">Create your account.</div>

          <div className="emailInput">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="inputTag"
              value={first_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="passInput">
            <input
              name="last_name"
              placeholder="Last Name"
              className="inputTag"
              value={last_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="emailInput">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="inputTag"
              value={email}
              onChange={(e) => validateEmail(e)}
              required
            />
            <br />
            <span>{emailMsg}</span>
          </div>

          <div className="passInput">
            <input
              name="user_name"
              placeholder="User Name"
              className="inputTag"
              value={user_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="passInput">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputTag"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="passInput">
            <input
              name="user_address"
              placeholder="User address"
              className="inputTag"
              value={user_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="passInput">
            <input
              name="shipping_address"
              placeholder="Shipping Address"
              className="inputTag"
              value={shipping_address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="passInput">
            <input
              name="phone_number"
              placeholder="Phone Number"
              className="inputTag"
              value={phone_number}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="registerBtn">
            Register
          </button>
          <div className="redirectLogIn">
            Already have an account?<Link to="/login"> Log in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
