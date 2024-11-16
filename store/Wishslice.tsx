"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { CartItem } from "@/constants";
interface WishState {
  items: CartItem[];
}

const loadFromLocalStorage = (): CartItem[] => {
  const wishData = localStorage.getItem("wish");
  return wishData ? JSON.parse(wishData) : [];
};
const initialState: WishState = {
  items: loadFromLocalStorage(),
};


const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action:PayloadAction<CartItem>) => {
            const existingItemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
              // إذا كان العنصر موجودًا بالفعل، قم بإزالته
              state.items.splice(existingItemIndex, 1);
            } else {
              // إذا لم يكن موجودًا، أضفه إلى القائمة
              state.items.push({ ...action.payload, wished: true });
            }
            localStorage.setItem("wish", JSON.stringify(state.items));
        },
      
    }
})

export const { addToWish} = wishSlice.actions;
export default wishSlice.reducer;



