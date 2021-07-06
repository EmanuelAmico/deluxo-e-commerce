import { createReducer, createAction} from "@reduxjs/toolkit";

export const setUsers = createAction('SET_USERS')

const usersReducer = createReducer([], {
  [setUsers] : (state, action) => action.payload
})


export default usersReducer;