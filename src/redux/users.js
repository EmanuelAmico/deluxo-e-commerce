import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  token: localStorage.getItem('token'),
  isLoggedIn: false,
}

export const setUser = createAction('SETUSER')

const userReducer = createReducer(initialState, {
  [setUser] : (state, action) => action.payload
})

export default userReducer;