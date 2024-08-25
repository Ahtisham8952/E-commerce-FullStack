import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const productIndex = state.findIndex(item => item.id === action.payload.id);
      if (productIndex === -1) {
        state.push({ ...action.payload });
      } else {
        state[productIndex].quantity += action.payload.quantity;
      }
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart (state) {
      return [];
    }
  }
});

export const { add, remove,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
