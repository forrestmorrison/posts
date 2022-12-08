
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "/auth"

const initialState = { user: undefined }

const saveToLocalStorage = (token) => {
    localStorage.setItem('token', token)
}

const getFromLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const addNewUser = createAsyncThunk('users/addNewUser', async (newUser) => {
    const response = await axios.post(`${USERS_URL}/signup`, newUser)
    saveToLocalStorage(response.data.token)
    return response.data
})

export const loginUser = createAsyncThunk('users/loginUser', async (user) => {
    const response = await axios.post(`${USERS_URL}/login`, user)
    saveToLocalStorage(response.data.token)
    return response.data
})

export const axiosWithAuth = axios.create({
    headers: {
        'authorization': `Bearer ${getFromLocalStorage('token')}` 
    }  
  });

export const checkUser = createAsyncThunk('users/checkUser', async () => {
    const response = await axiosWithAuth.get(`${USERS_URL}/checkUser`)
    return response.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuthState: (state) => {
            state.user = undefined
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.user = action.payload.user           
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(checkUser.rejected, (state) => {
                state.user = null;
            })
    }
})

export const selectUser = (state) => state.auth.user

export const { clearAuthState } = authSlice.actions
export default authSlice.reducer