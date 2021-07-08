import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../redux/products";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProduct());
  }, []);

  return (
    <div className="container mt-2 text-primary">
      <div className="row mt-3">
        <table className="table  text-center text-light bg-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) =>
                    <tr key={product.id}>
                      <th scope="row">{index + 1}</th>
    
                      <td>{'product.image'}</td>
                      <td>{product.name}</td>    
                      <td>{product.price}</td>    
                      <td>
                        <button
                          className="btn btn-primary btn-lg"
                          onClick={() => handleClick(index, user)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-lg"
                          onClick={() => handleClick(index, user)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
