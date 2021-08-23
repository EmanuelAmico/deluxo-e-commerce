import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import API_URL from "../config/env";


const initialState = {
    products: [],
    selectedProduct: {},
}


export const selectProduct = createAsyncThunk('SELECT_PRODUCT', (param, thunkAPI)=>{
    return axios.get(`${API_URL}/api/products/${param}`)
    .then(res => res.data)
})

export const selectProductsByCategory = createAsyncThunk('SELECT_PRODUCTS_BY_CATEGORY', (category)=>{
    return axios.get(`${API_URL}/api/products/filter?category=${category}`)
    .then(res => res.data)
    .then(filteredProducts => {
        const products = {
            products: [],
            selectedProduct: {}
        }
        products.products.push(...filteredProducts)
        return products
    })
})


export const showProduct = createAsyncThunk('SHOW_PRODUCT', () => {
    return axios.get(API_URL + '/api/products')
    .then(res => res.data)
})

const productReducer = createReducer(initialState, {
    [showProduct.fulfilled] : (state, action) => {state.products = action.payload},
    [selectProduct.fulfilled] : (state, action) => {state.selectedProduct = action.payload},
    [selectProductsByCategory.fulfilled]: (state, action) => action.payload
})

export default productReducer;