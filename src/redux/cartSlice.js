import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: localStorage.getItem('CART')
      ? JSON.parse(localStorage.getItem('CART'))
      : [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cart = [cartObj, ...state.cart];
      localStorage.setItem('CART', JSON.stringify(state.cart));
    },
    removeFromCart: (state,reqData) => {
      let { id } = reqData.payload;
      state.cart = state.cart.filter((item) => item.id !== id)
      localStorage.setItem('CART', JSON.stringify(state.cart));
    },
    changeQty: (state, reqData) => {
        const {id, finalQty }= reqData.payload;

        state.cart = state.cart.filter((cartItem) => {
          if(cartItem.id == id) {
            cartItem['qty']= finalQty;
          }
          return cartItem
        })
        
      localStorage.setItem('CART', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
