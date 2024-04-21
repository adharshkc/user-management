import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    name: "",
    imageUrl: "",
  },
  reducers: {
    addAdmin: (state, action) => {
      const { name, imageUrl } = action.payload;
      state.name = name;
      state.imageUrl = imageUrl;
    },
  },
});

export const { addAdmin } = adminSlice.actions;
export default adminSlice.reducer;
