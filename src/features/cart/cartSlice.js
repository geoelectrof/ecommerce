import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        // console.log("action.payload", action.payload)
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cart.find(item => item.id === itemId)
      cartItem.quantity += 1
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find((item) => item.id === itemId)
      if (cartItem.quantity === 1) {
        state.cart = state.cart.filter(item => item.id !== itemId)
      } else {
        cartItem.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload
      state.cart = state.cart.filter((item) => item.id !== itemId)
    },
    calculateTotals: (state) => {
      let totalQuantity = 0
      let totalPrice = 0
      state.cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.quantity * item.price
      })
      state.totalQuantity = totalQuantity
      state.totalPrice = totalPrice
    }
  },
});

console.log(cartSlice)

export default cartSlice.reducer;
export const { addToCart, increase, decrease, removeFromCart, calculateTotals } = cartSlice.actions;