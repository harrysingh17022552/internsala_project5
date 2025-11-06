import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";
const myStore = configureStore({
  reducer: {
    books: bookSlice,
  },
});
export default myStore;
