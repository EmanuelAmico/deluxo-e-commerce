import React from "react";
import "../assets/styles/components/SingleCard.scss";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function User() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="container text-dark">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4 text-light">{user.user_name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {user.full_name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.email}
            </li>
            <li className="list-group-item">
              <strong>Orders:</strong>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {!user.isAdmin ? (
          <Link className="btn btn-primary" to={"/"}>
            User
          </Link>
        ) : null}
        {!user.isAdmin ? (
          <Link className="btn btn-primary" to={"/"}>
            Product
          </Link>
        ) : null}
      </div>
    </div>
  );
}
