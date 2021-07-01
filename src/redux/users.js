import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";

/* 
//Maneja estados locales (en componentes especificos)
const [email, setEmail] = useState('')
setEmail('hola')

 */

//esto es state
const initialState = {
    saludoDespedida: null,
    saludoBienvenida: null,
}
//esto es action
export const setSaludoDespedida = createAction('SETSALUDODESPEDIDA')
export const setSaludoBienvenida = createAction('SETSALUDOBIENVENIDA')

const saludoReducer = createReducer(initialState, {
    [setSaludoDespedida] : (state, action) => {state.saludoDespedida = action.payload},
    [setSaludoBienvenida] : (state, action) => {state.saludoBienvenida = action.payload}
})



export default saludoReducer;



/*

// Action
const setUser = createAction("SET_USER")

// Reducer
const initialState = {
  isLoggedIn: !!localStorage.getItem('userToken'),
  id: null,
  name: null,
  email: null,
  token: localStorage.getItem('userToken'),
}

const userReducer = createReducer(initialState, {
  [setUser] : (state, action) => action.payload
})


*/