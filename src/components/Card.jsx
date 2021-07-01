import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import "../assets/styles/components/Card.scss"
import { selectProduct, showProduct } from '../redux/products';

function Card() {

    const { productSelected } = useSelector(store => store.products);

    const match = useRouteMatch()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!Object.keys(productSelected).length) {
          const { productId } = match.params 
          dispatch(selectProduct(productId))
        }
    }, [])

    return (
        <div>
            <div className='card-product'>

                <div className='card-img' >
                <img src={productSelected.image} alt='t-shirt'></img>
                </div>
                
                <div className='card-description'>
                    <h3>{productSelected.name}</h3>
                    <p>{productSelected.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Card


