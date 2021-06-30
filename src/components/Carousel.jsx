import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showProduct , selectProduct } from '../redux/products'
import { Link } from 'react-router-dom';
import Card from './Card'

const Carousel = () => {

  const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(showProduct())
  
  },[])


  return (
    <div>

      {products.map((product) => (

        <Link onClick={()=> dispatch(selectProduct(product.id))} to={`/products/${product.id}`}>

          <div key={product.id} >
            <img src={product.image} alt="productImg" ></img>
          </div>
          
        </Link>
               
      ))}
      
    </div>
  )
}

export default Carousel
