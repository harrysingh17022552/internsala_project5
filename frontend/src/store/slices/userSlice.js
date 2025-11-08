import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  //   user bucket, this keeps every information about user
  initialState: {
    user: {
      fname: "Harish",
      mname: "",
      lname: "Nigam",
      nickname: "Harry",
      gender: "male",
      mobno: "8962008472",
      email: "harishnigam21@gmail.com",
      address: "",
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
