import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../config/env";

const initialState = [];

export const setOrders = createAction("SET_ORDERS");

export const showUserCompletedOrders = createAsyncThunk(
  "SHOW_USER_COMPLETED_ORDERS",
  (userId) => {
    return axios
      .get(`${API_URL}/api/users/${userId}/orders/completed`)
      .then((res) => {
        const order = res.data;
        if (!order) return [];
        return order;
      })
      .catch((error) => console.log(error));
  }
);

const ordersReducer = createReducer(initialState, {
  [setOrders]: (state, action) => action.payload,
  [showUserCompletedOrders.fulfilled]: (state, action) => action.payload,
});

export default ordersReducer;
