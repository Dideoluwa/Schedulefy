import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const defaultAuthState = {
    token: '',
    isLoggedIn: false,
    name: '',
    email : '',
    expirationTime: null
}


let authSlice = createSlice({
    name: 'authentication',
    initialState: defaultAuthState,
    reducers: {
        login(state, action) {
            const payload = action.payload
            let expTime = payload.expiresIn * 1000
            state.token = payload.idToken
            state.isLoggedIn = true
            state.name = payload.displayName
            state.expirationTime = expTime
            state.email = payload.email
        },
        logout(state) {
            state.token = ''
            state.isLoggedIn = false
            state.name = ''
            state.email = ''
            state.expirationTime = null
        }
    }
})

const persistConfig = {
    key: 'authentication',
    storage
}

let persistedReducer = persistReducer(persistConfig, authSlice.reducer)

const store = configureStore({
    reducer: {
        auth: persistedReducer
    },
    middleware: [thunk]
})

export const authActions = authSlice.actions
export default store
