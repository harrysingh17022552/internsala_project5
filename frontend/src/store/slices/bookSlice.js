/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import BooksList from "../../utils/booklist";
const bookSlice = createSlice({
  //name of slice
  name: "books",
  //contain almost 30 dummy book data
  initialState: {
    items: window.localStorage.getItem("bookList")
      ? JSON.parse(window.localStorage.getItem("bookList"))
      : BooksList(),
  },
  reducers: {
    // add new book action, that will take object as payload and push it in my current book store item array and also update it in local storage so that booklist does not flush on refresh
    addBook: (state, action) => {
      state.items.push(action.payload);
      window.localStorage.setItem("bookList", JSON.stringify(state.items));
    },
    // just dummy action for now, thats all, the action can be modify by filtering id that not equal to id in payload, this how it will update the array and remove the payload book.
    removeBook: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      window.localStorage.setItem("bookList", JSON.stringify(state.items));
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
