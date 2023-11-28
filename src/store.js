import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './features/todoSlice'

// import todoReducer

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})