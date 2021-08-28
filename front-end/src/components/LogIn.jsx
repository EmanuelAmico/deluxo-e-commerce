import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useHistory, Link } from "react-router-dom";
import validator from "validator";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user";
import axios from "axios";
import "../assets/styles/components/LogIn.scss";
import API_URL from "../config/env";
import generateNotification from "../utils/generateNotification";

function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formLoginValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formLoginValues;
  const [emailMsg, setEmailMsg] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(API_URL + "/api/login", formLoginValues);
      const user = res.data;
      localStorage.setItem("token", user.token);
      dispatch(setUser({ ...user, isLoggedIn: true }));
      generateNotification("success", "Success!", "You are logged in.");
      history.push("/products");
    } catch (error) {
      if (error.response.status === 400 || 401)
        generateNotification("error", "Error!", "Invalid credentials.");
    }
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMsg("Valid Email!");
    } else {
      setEmailMsg("enter valid Email!");
    }
    handleInputChange(e);
  };

  return (
    <div id="loginBody">
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

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="loginFormContainer">
          <div className="login-welcome-text">Happy to see you!</div>

          <div className="loginCreateAcc">Log in to access your account.</div>

          <div className="loginEmailInput">
            <input
              type="text"
              name="email"
              className="inputTag"
              placeholder="Email"
              value={email}
              onChange={(e) => validateEmail(e)}
              required
            />
          </div>
          <br />
          <span>{emailMsg}</span>
          <div className="loginPassInput">
            <input
              type="password"
              name="password"
              className="inputTag"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="loginBtn">
            Log in
          </button>

          <div className="redirectLogIn">
            Not registered yet?<Link to="/register"> Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
