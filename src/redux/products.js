/* 
//user actions

add-product
delete-product

//admin actions

add-product
delete-product
post-product
put-product // <--- modifica
*/
import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    products: [],
    productSelected: {},
}

export const selectProduct = createAsyncThunk('SELECT_PRODUCT', (param, thunkAPI)=>{
    return axios.get(`http://localhost:3001/products/${param}`)
    .then(res => res.data)
})

export const showProduct = createAsyncThunk('SHOW_PRODUCT', () => {
    return axios.get('http://localhost:3001/products')
    .then(res => {console.log(res.data); return res.data})
})

const productReducer = createReducer(initialState, {
    [showProduct.fulfilled] : (state, action) => {state.products = action.payload},
    [selectProduct.fulfilled] : (state, action) => {state.productSelected = action.payload},
})

export default productReducer;