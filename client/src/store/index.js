import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        auth: authReducer
    }
})

