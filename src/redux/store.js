import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

//importacion de reducers
import productReducer from './products';
import userReducer from './user';
import productsAddedToCartReducer from './productsAdded'
import orderReducer from './order';
import usersReducer from './users';

const store = configureStore({
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: { 
    //esto representa a la store de estados
    user: userReducer,
    users: usersReducer,
    products: productReducer,
    productsAddedToCart: productsAddedToCartReducer,
    order: orderReducer,
  },
});

export default store