import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../config/env";

const initialState = [];

export const showCategories = createAsyncThunk("SHOW_CATEGORIES", () => {
  return axios
    .get(API_URL + "/api/categories")
    .then((res) => res.data.categories);
});

const categoriesReducer = createReducer(initialState, {
  [showCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
