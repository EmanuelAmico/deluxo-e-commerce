import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom';
import { selectProduct, showProduct } from '../redux/products';
import "../assets/styles/components/Card.scss"

function Card({ product }) {
    const match = useRouteMatch()
    const dispatch = useDispatch()

    return (
        <>
        <img src={product.image} alt='t-shirt' className='img-product'></img>
        
        </>
    )
}

export default Card


