import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../config/env";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const selectProduct = createAsyncThunk(
  "SELECT_PRODUCT",
  (param, thunkAPI) => {
    return axios
      .get(`${API_URL}/api/products/${param}`)
      .then((res) => res.data);
  }
);

export const selectProductsByCategory = createAsyncThunk(
  "SELECT_PRODUCTS_BY_CATEGORY",
  (category) => {
    if (category === "All") {
      return axios
        .get(API_URL + "/api/products")
        .then((res) => res.data)
        .then((products) => products);
    }
    return axios
      .get(`${API_URL}/api/products/filter?category=${category}`)
      .then((res) => res.data)
      .then((filteredProducts) => filteredProducts)
      .catch((error) => console.log(error));
  }
);

export const selectProductsBySearch = createAsyncThunk(
  "SELECT_PRODUCTS_BY_SEARCH",
  (search) => {
    return axios
      .get(`${API_URL}/api/products/search?key=${search}`)
      .then((res) => res.data)
      .then((searchProducts) => searchProducts)
      .catch((error) => console.log(error));
  }
);

export const showProduct = createAsyncThunk("SHOW_PRODUCT", () => {
  return axios.get(API_URL + "/api/products").then((res) => res.data);
});

export const clearSelectedProduct = createAction("CLEAR_SELECTED_PRODUCT");

export const clearProducts = createAction("CLEAR_PRODUCTS");

const productReducer = createReducer(initialState, {
  [showProduct.fulfilled]: (state, action) => {
    state.products = action.payload;
  },
  [selectProduct.fulfilled]: (state, action) => {
    state.selectedProduct = action.payload;
  },
  [selectProductsByCategory.fulfilled]: (state, action) => {
    state.products = action.payload;
  },
  [selectProductsBySearch.fulfilled]: (state, action) => {
    state.products = action.payload;
  },
  [clearSelectedProduct]: (state, action) => {
    state.selectedProduct = {};
  },
  [clearProducts]: (state, action) => ({
    products: [],
    selectedProduct: {},
  }),
});

export default productReducer;
