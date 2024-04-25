import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    name: "",
    email: ""
    
  },
  reducers: {
    addAdmin: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email
    },
  },
});

export const { addAdmin } = adminSlice.actions;
export default adminSlice.reducer;
