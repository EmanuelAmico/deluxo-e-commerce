import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import validator from 'validator'
import {useDispatch, useSelector} from "react-redux"
import { setUser } from '../redux/users';
import axios from 'axios'

function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch()
  const [formLoginValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formLoginValues;
  const [emailMsg, setEmailMsg] = useState("")

  
  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const res = await axios.post('/api/login', formLoginValues)
      const user = res.data
      localStorage.setItem('token', user.token)
      dispatch(setUser({...user, isLoggedIn: true}))
      alert("Se ha logueado con éxito")
      history.push('/products')
    } catch (error) {
      if(error.response.status === 400 || 401)
        alert("Credenciales inválidas")
    }
  }


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
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => validateEmail(e)}
              required
            />
          </div>
          <br />
          <span>{emailMsg}</span>
          <div className="passInput">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
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
        </div>
      </form>
    </div>
  );
}

export default LogIn;
