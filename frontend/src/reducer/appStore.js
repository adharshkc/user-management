import {configureStore} from "@reduxjs/toolkit"
import adminReducer from "./adminSlice"
import userReducer from "./userSlice"

const appStore = configureStore({
    reducer:{
        admin: adminReducer,
        user: userReducer
    }
})


export default appStore;