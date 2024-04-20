import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

const todoStore = configureStore({
    reducer:{
        todo: todoReducer
    }
})


export default todoStore;