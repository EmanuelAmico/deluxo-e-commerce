import React from 'react';
import '../assets/styles/components/cart.css'
import { useSelector } from "react-redux"


export default function ShoppingCart(props) {
//   const { cartItems, onAdd, onRemove } = props;
const productsInCart = useSelector(state => state.productsAddedToCart)

  let totalPrice = "$50";

  return (
    <aside className="block col-1 cart">
      <h2>Cart Items</h2>
      <div>
        {productsInCart.length === 0 && <div>Cart is empty</div>}
        {productsInCart.map((item) => (
          <div key={item.id} className="row products">
            <div className="col-2" >{item.name}</div>
            <div className="col-2" >{item.price}</div>
            <div className="col-2">
              <button onClick={() => console.log("menos")} className="remove">
                -
              </button>{' '}
              <button onClick={() => console.log("mas")} className="add">
                +
              </button>
            </div>

          </div>
        ))}

        {productsInCart.length !== 0 && (
          <>
            <hr></hr>
            <div className="row total">
              <div className="col-2">Total Price</div>
              <div className="col-1 text-right">${totalPrice}</div>
            </div>

            <hr />
            <div className="row">
              <button onClick={() => alert('Implementar Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
