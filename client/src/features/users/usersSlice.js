import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Dude Lebowski'},
    { id: '1', name: 'Mike Jones'},
    { id: '2', name: 'Forrest Morrison'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer