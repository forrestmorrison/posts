
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "/users"; // 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return [...response.data]
})

// actions
// name of the slice, initialState, reducers

export const addNewUser = createAsyncThunk('users/addNewUser', async (newUser) => {
    const response = await axios.post(USERS_URL, newUser)
    console.log('response', response)
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer