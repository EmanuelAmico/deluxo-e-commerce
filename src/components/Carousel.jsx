import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct, selectProduct } from "../redux/products";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";
import { setProductsAddedToCart } from "../redux/productsAdded";

const Carousel = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.productsAddedToCart);

  useEffect(() => {
    dispatch(showProduct());
  }, []);

  function addProduct (product) {
    const alreadyInCart = productsInCart.map(productInCart => productInCart.id == product.id)
    if (alreadyInCart.includes(true)) {
      const i = alreadyInCart.indexOf(true)
      const productsInCartCopy = [...productsInCart]
      productsInCartCopy[i].quantity++
      dispatch(setProductsAddedToCart(productsInCartCopy))   
    }
    else {
      const productCopy = {...product, quantity: 1}
      dispatch(setProductsAddedToCart([...productsInCart, productCopy]))   
    }
  }

  return (
    <div className="wrapper">
      <div className="even-columns">
        {products.map((product) => (
          <div>
            <Link
              onClick={() => dispatch(selectProduct(product.id))}
              to={`/products/${product.id}`}
              key={product.id}
            >
              <div className="col">
                <Card product={product} />
              </div>
            </Link>
            <div className="btn-group">
              <button
                onClick={() => addProduct(product)}
              >
                Add to cart
              </button>
              <Link
                onClick={() => dispatch(selectProduct(product.id))}
                to={`/products/${product.id}`}
                key={product.id}
              >
                <button>View Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
