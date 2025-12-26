import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // ADD ITEM TO CART
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // REMOVE ITEM FROM CART
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== itemName
      );
    },

    // UPDATE ITEM QUANTITY
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
