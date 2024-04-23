import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "adharshkc",
    phone: "000000000",
    imageUrl: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { name, email, phone, imageUrl } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.imageUrl = imageUrl;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
