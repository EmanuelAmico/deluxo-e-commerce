<<<<<<< HEAD
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import validator from 'validator'


function LogIn() {
  const history = useHistory();
  const [formLoginValues, handleInputChange] = useForm({
    Email: "",
    Password: "",
  });
  const { Email, Password } = formLoginValues;
  const [emailMsg, setEmailMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMsg("Valid Email!");
    } else {
      setEmailMsg("enter valid Email!");
    }
    handleInputChange(e)
    
  };

  return (
    <div className="registerBody">
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="welcome-text">Welcome !</div>

          <div className="createAcc">Log in to access your account.</div>

          <div className="emailInput">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={(e) => validateEmail(e)}
              required
            />
          </div>
          <br />
          <span>{emailMsg}</span>
          <div className="passInput">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={Password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="registerBtn"
          >
            Log in
       
          </button>
=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { showProduct } from '../redux/products'

function LogIn() {


    

    return (
        <div>



            
>>>>>>> pre-merge
        </div>
      </form>
    </div>
  );
}

export default LogIn;
