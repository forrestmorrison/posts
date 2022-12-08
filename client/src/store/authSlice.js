
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "/auth"

const initialState = { user: null }

const saveToLocalStorage = (token) => {
    localStorage.setItem('token', token)
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.user = action.payload.user           
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
    }
})

export const selectUser = (state) => state.auth.user

export default authSlice.reducer