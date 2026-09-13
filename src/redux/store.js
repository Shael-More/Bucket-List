import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import cartReducer from './cartSlice'
export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    cartStore: cartReducer,
  }
})