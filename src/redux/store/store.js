import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import postReducer from '../slices/postSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store