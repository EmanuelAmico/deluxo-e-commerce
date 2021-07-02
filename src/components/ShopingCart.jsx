import React from 'react';

export default function ShoppingCart(props) {
//   const { cartItems, onAdd, onRemove } = props;
let cartItems = [{
    "name": "Remera",
    "description": "Drugz r da best",
    "price": "$10",
    "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/DGK-Trippin--Black-T-Shirt-_305127-front-US.jpg",
  },
  {
    "id": 2,
    "name": "Pantalon",
    "description": "Drugz r da best",
    "price": "$20",
    "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/DGK-Trippin--Black-T-Shirt-_305127-front-US.jpg",
  },
  {
    "id": 2,
    "name": "Short",
    "description": "Drugz r da best",
    "price": "$50",
    "image": "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/DGK-Trippin--Black-T-Shirt-_305127-front-US.jpg",
  },]

  let totalPrice = "$50";

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2" style={{fontSize: "50px"}}>{item.name}</div>
            <div className="col-2" style={{fontSize: "50px"}}>{item.price}</div>
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

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
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
