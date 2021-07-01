import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
  productsAddedToCart: [],
}

export const setProductsAddedToCart = createAction('SET_PRODUCT_ADDED')

const productsAddedToCartReducer = createReducer(initialState, {
  [setProductsAddedToCart.fulfilled] : (state, action) => action.payload
})


export default productsAddedToCartReducer;