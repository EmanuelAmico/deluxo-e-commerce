import { createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  id: null,
  token: localStorage.getItem('token'),
  isLoggedIn: false,
}

export const setUser = createAction('SETUSER')

const userReducer = createReducer(initialState, {
  [setUser.fulfilled] : (state, action) => action.payload
})


export default userReducer;