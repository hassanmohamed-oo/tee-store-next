"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/constants";

// تعريف حالة الكارت
interface CartState {
  items: CartItem[];
}

// وظيفة لتحميل البيانات من localStorage
const loadFromLocalStorage = (): CartItem[] => {
  
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  
  
};

// الحالة الأولية
const initialState: CartState = {
  items: loadFromLocalStorage(), // تحميل البيانات هنا
};

// إنشاء Slice الكارت
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        state.items.splice(existingItemIndex, 1); // إزالة العنصر إذا كان موجودًا
      } else {
        state.items.push({ ...action.payload, addedToCart: true }); // إضافة العنصر مع علامة `addedToCart`
      }
      localStorage.setItem("cart", JSON.stringify(state.items)); // حفظ الحالة في localStorage
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); // تحديث localStorage
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = Math.max(
          1,
          state.items[itemIndex].quantity + action.payload.amount
        );
        localStorage.setItem("cart", JSON.stringify(state.items)); // تحديث localStorage
      }
    },
  },
});

// تصدير الإجراءات والمخفض
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
