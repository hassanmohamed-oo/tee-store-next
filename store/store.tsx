
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice';
import wishReducer from './Wishslice'
const store = configureStore({
  reducer: {
   cart: cartReducer,
   wish: wishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
