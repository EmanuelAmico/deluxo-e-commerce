import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {

    const order = useSelector(state => state.order)
    console.log('ORDER', order)

    return(
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
           
          </table>
        </div>
      </div>
    )
}

export default Orders