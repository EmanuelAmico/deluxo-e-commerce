import { configureStore } from "@reduxjs/toolkit";

//importacion de reducers
import productReducer from "./products";
import userReducer from "./user";
import productsAddedToCartReducer from "./productsAdded";
import orderReducer from "./order";
import ordersReducer from "./orders";
import usersReducer from "./users";
import categoriesReducer from "./categories";

const store = configureStore({
  reducer: {
    //esto representa a la store de estados
    user: userReducer,
    users: usersReducer,
    products: productReducer,
    productsAddedToCart: productsAddedToCartReducer,
    order: orderReducer,
    orders: ordersReducer,
    categories: categoriesReducer,
  },
});

export default store;
