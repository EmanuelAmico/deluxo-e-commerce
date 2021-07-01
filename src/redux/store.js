import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

//importacion de reducers
import productReducer from './products';
import userReducer from './users';
import productsAddedToCartReducer from './productsAdded'

const store = configureStore({
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: { 
    //esto representa a la store de estados
    user: userReducer,
    products: productReducer,
    productsAddedToCart: productsAddedToCartReducer,
  },
});

export default store