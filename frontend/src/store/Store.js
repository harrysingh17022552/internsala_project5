import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";
//configuring new store to my project, that will contain all common data of the user
const myStore = configureStore({
  //importing all slices that we created separately for this store
  reducer: {
    books: bookSlice,
  },
});
export default myStore;
