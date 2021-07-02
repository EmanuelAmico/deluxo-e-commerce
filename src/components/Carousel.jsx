import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct, selectProduct } from "../redux/products";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";
import {setProductsAddedToCart} from "../redux/productsAdded"


const Carousel = () => {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch();
  const history = useHistory()
  const productsInCart = useSelector(state => state.productsAddedToCart)


  useEffect(() => {
    dispatch(showProduct());
  }, []);

  

  return (
    <div className="wrapper">
      <div className='even-columns'>
        
          {products.map( product => (
            <div>
              <Link onClick={()=> dispatch(selectProduct(product.id))} to={`/products/${product.id}`} key={product.id} >
                <div className="col">
                    <Card product={product} />
                </div>
              </Link>
              <div className='btn-group'>
                <button onClick={() => dispatch(setProductsAddedToCart([...productsInCart, product]))}>Add to cart</button>
                {/* <button>View Product</button> */}
              </div>
            </div>
            ))}
           
           
      </div>
    </div>
  );
};

export default Carousel;
