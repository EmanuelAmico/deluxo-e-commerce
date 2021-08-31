import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/User.scss";

export default function User() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container text-dark user">
      <div className="row justify-content-center w-100">
        <div className="col-md-8">
          <h2 className="mb-4 text-light">{user.user_name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Name:</strong> {user.full_name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.email}
            </li>
          </ul>
          {!user.is_admin ? (
            <Link
              className="btn btn-outline-primary btn-lg mt-3"
              to={`/orders/user/${user.id}`}
            >
              Order History
            </Link>
          ) : null}
        </div>
      </div>
      <div>
        {user.is_admin ? (
          <>
            <Link className="btn btn-primary btn-lg" to={"/userslist"}>
              Edit Users
            </Link>
            <Link className="btn btn-success btn-lg" to={"/productslist"}>
              Edit Product
            </Link>
            <Link className="btn btn-secondary btn-lg" to={"/createproduct"}>
              Create Product
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
