import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPost = createAsyncThunk('post/lists', async (payload, rejectedValue, getState, dispatch) => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        return error.response
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState: {},
    extraReducers: {
        // Handle pending
        [fetchPost.pending]: (state, action) => {
            state.loading = true;
        },

        // Handle fulfilled
        [fetchPost.fulfilled]: (state, action) => {
            state.postList = action.payload;
            state.loading = false;
        },

        // Handle rejection
        [fetchPost.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export default postSlice.reducer