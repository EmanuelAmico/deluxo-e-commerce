import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="links">
        <Link to="/login"> Login </Link>
        <Link to="register">Register</Link>
        <Link to="/cart">Shoppin Cart</Link>
      </div>
    </header>
  );
}

export default Header;
