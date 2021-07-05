import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";


export const setProductsAddedToCart = createAction("SET_PRODUCT_ADDED");
export const removeProductsAddedToCart = createAction("REMOVE_PRODUCT_ADDED");

const productsAddedToCartReducer = createReducer([], {

  [setProductsAddedToCart]: (state, action) => action.payload,
  
});

export default productsAddedToCartReducer;
