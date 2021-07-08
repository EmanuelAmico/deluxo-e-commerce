import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProductsAddedToCart = createAction("SET_PRODUCT_ADDED");

export const productsAddedToCartFromDb = createAsyncThunk('SET_PRODDUCT_ADDED_DB', (shopcartId) => {
  return axios.get(`/api/shopcarts/${shopcartId}`)
              .then(res => {
                const products = res.data
                products.forEach(product => {
                  product.quantity = product.shop_cart_items.quantity
                });
                return products
              })
})

const productsAddedToCartReducer = createReducer([], {

  [setProductsAddedToCart]: (state, action) => action.payload,
  [productsAddedToCartFromDb.fulfilled]: (state, action) => action.payload

});

export default productsAddedToCartReducer;
