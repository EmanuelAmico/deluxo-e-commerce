/* //user actions

add-product
delete-product

//admin actions

add-product
delete-product
post-product
put-product //modifica */
import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    
        id: null,
        name: null,
        description: null,
        price: null,
        image: null,
        stock: null,
        color: null,
        size: null,
        gender: null,
        thumbnail: null
   
};

export const showProduct = createAsyncThunk('CREATEPRODUCT', () => {
    return axios.get('https://localhost:3001/initialState')
    .then(res => res.data)
  })

const productReducer = createReducer(initialState, {
    [showProduct] : (state, action) => {state = action.payload}  
})



export default productReducer;