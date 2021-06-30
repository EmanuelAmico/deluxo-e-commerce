import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


function Card({match}) {

    const { productSelected } = useSelector(store => store.products);

    useEffect(() => {
        console.log(productSelected)
    }, [])

    return (
        <div>
            <div className='singleProduct'>

                <img src={productSelected.image} alt='productito'></img>

            </div>
        </div>
    )
}

export default Card


