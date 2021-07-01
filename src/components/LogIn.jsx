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
  const user = useSelector(state => state.user)
  const [formLoginValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formLoginValues;
  const [emailMsg, setEmailMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/routes/login', formLoginValues)
    .then(res => res.data)
    .then(({ id, name, email, token }) => {
      if(rememberMe)
        localStorage.setItem('userToken', token)
      dispatch(setUser({ ...user, id, name, email, token, isLoggedIn: true }))
      alert("Se ha logueado con éxito.")
      history.push('/')
    })
    .catch(error => {
      //NOTE Sí el response status es del 300 en adelante cae acá el axios
      if(error.response.status === 400 || 401)
        alert("Credenciales inválidas")
    }) 
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
              name="Password"
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
