import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)

        }
    }
})

export const {addItem} = todoSlice.actions
export default todoSlice.reducer