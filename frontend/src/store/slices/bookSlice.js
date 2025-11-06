import { createSlice } from "@reduxjs/toolkit";
const bookSlice = createSlice({
  name: "bboks",
  initialState: {
    items: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
    removeBook: (state, action) => {
      state.items.pop();
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
