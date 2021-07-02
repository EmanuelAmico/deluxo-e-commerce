import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/users";

function Header() {
  const dispatch = useDispatch()

  useEffect(async ()=> {
    try {
      if(localStorage.getItem('token')){
        const token = localStorage.getItem('token')
        const res = await axios.get('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const user = res.data
        dispatch(setUser({...user, token, isLoggedIn: true}))
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <header>
      <div className="links">
        <Link to="/login"> Login </Link>
        <Link to="register">Register</Link>
        <Link to="/cart">Shoppin Cart</Link>
        <Link to='/products'>Productos</Link>
      </div>
    </header>
  );
}

export default Header;
