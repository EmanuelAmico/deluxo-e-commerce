import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import "../assets/styles/components/SingleCard.scss"
import { selectProduct, showProduct } from '../redux/products';

function SingleCard() {

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
        <div className='singleCardContainer'>
            

                <div className='cardImgWrapper' >
                <img className='cardImg' src={productSelected.image} alt='t-shirt'></img>
                </div>
                
                <div className='cardDescription'>
                    <h3>{productSelected.name}</h3>
                    <p>{productSelected.description}</p>
                    
                </div>

            
        </div>
    )
}

export default SingleCard
