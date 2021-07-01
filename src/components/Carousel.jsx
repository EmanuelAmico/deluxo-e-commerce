import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct, selectProduct } from "../redux/products";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";

const Carousel = () => {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(showProduct());
  }, []);



  return (
    <div className="wrapper">
      <div className="row">
        {products.map((product) => (
          <div>
          <Link onClick={() => dispatch(selectProduct(product.id))} to={`/products/${product.id}`}>
            <div className="col">
              <img className='img-product' src={product.image} alt="remera"></img>
            </div>
          </Link>
          <button>Agregar al carrito</button>
          <button>Sacar del carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
