import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost } = action.payload;
      console.log("in CartSlice");
      console.log(`CartSlice added ${name}`);

      const itemInCart = state.items.find(item => item.name === name);
      if (itemInCart){
        itemInCart.quantity++;
      }
      else{
        state.items.push({name, image, cost, quantity: 1});
      }

    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      
      const itemQtyUpdate = state.items.find(item => item.name === name);
      if (itemQtyUpdate) {
        itemQtyUpdate.quantity = quantity;
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
