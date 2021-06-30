import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
/* import { setSaludoBienvenida, setSaludoDespedida} from '../redux/users'  */
import { showProduct } from '../redux/products'

function LogIn() {
/* 
    const saludo = useSelector(store => store.saludo)

    console.log(saludo)

    const dispatch = useDispatch()
    
    const handleClickSaludo = () => {
        
        dispatch(setSaludoBienvenida('hola'))
        console.log('se ejecuto la funcion saludo')
    }
    const handleClickDespedida = () => {
        
        dispatch(setSaludoDespedida('chau'))
        console.log('se ejecuto la funcion despedida')
    }
     */

    const productos = useSelector(store => store.productos)
    const dispatch = useDispatch()
    dispatch(showProduct())

    return (
        <div>

            {/* <div>LogIn</div>
            <button onClick={handleClickSaludo}>TE SALUDO</button>
            {<h3>Saludo Bienvenida : {saludo.saludoBienvenida}</h3>}
            <button onClick={handleClickDespedida}>TE DESPIDO</button>
            {<h3>Saludo Despedida : {saludo.saludoDespedida}</h3>} */}

        {productos.map((producto) => (
                
                <div key={producto.id} className="Producto">
                <img src={producto.image} alt="productImg" className="imgProduct"></img>
                </div>
               
            ))}


            
        </div>
    )
}

export default LogIn
