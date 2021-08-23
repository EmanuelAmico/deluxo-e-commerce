import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "../assets/styles/components/SingleCard.scss";
import { selectProduct } from "../redux/products";

function SingleCard() {
  const { selectedProduct } = useSelector((store) => store.products);

  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(selectedProduct).length) {
      const { productId } = match.params;
      dispatch(selectProduct(productId));
    }
  }, []);

  return (
    <div className="container text-dark">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4 text-light">{selectedProduct.name}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Price:</strong> {selectedProduct.price}
            </li>
            <li className="list-group-item">
              <strong>Stock:</strong> {selectedProduct.stock}
            </li>
            <li className="list-group-item">
              <strong>Description:</strong> {selectedProduct.description}
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <img
            className="cardImg"
            src={selectedProduct.image}
            alt="t-shirt"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
