import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct, selectProduct } from "../redux/products";
import { Link, useHistory } from "react-router-dom";
import Card from "./Card";
import "../assets/styles/components/Carousel.scss";

const Carousel = () => {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch();
  const history = useHistory()


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
                <button>Add to cart</button>
                <Link onClick={()=> dispatch(selectProduct(product.id))} to={`/products/${product.id}`} key={product.id} >
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
