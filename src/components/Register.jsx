import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import validator from "validator";

function Register() {
  const history = useHistory();

  const [formRegisterValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formRegisterValues;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="registerBody">
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="welcome-text">Welcome !</div>

          <div className="createAcc">Register</div>

          <div className="emailInput">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="emailInput">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => validateEmail(e)}
              required
            />
            <br />
            <span>{emailMsg}</span>
          </div>
          <div className="passInput">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="registerBtn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
