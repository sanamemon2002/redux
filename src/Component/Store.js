import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counterslice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
