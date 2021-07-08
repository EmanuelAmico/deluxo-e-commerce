import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {  } from "../redux/products";


const Products = () => {
    return (
        <div className="container mt-2 text-primary">
          <div className="row mt-3">
            <table className="table  text-center text-light bg-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Permisos</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) =>
                  userLogin.user_name !== user.user_name ? (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
    
                      <td>{user.user_name}</td>
                      <td>{user.email}</td>
                      <td>{`${user.is_admin ? "Admin" : "User"} `}</td>
    
                      <td>
                        <button
                          className="btn btn-danger btn-lg"
                          onClick={() => handleClick(index, user)}
                        >
                          {`${user.is_admin ? " Set User" : "Set Admin"} `}
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
}


export default Products