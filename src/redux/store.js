import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

//importacion de reducers
import productReducer from './products';
import saludoReducer from './users';


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: { 
    //esto representa a la store de estados
    saludo: saludoReducer,
    products: productReducer,
  },
});

export default store