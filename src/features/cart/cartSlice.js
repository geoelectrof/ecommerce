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
      // const itemInCart = state.cart.find(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
        console.log("action.payload", action.payload)
        state.cart.push({ ...action.payload, quantity: 1 });
      // }
    },
    calculateTotals: (state) => {
      let totalQuantity = 0
      let totalPrice = 0
      state.cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.amount * item.price
      })
      state.totalQuantity = totalQuantity
      state.totalPrice = totalPrice
    }
  },
});

console.log(cartSlice)

export default cartSlice.reducer;
export const { addToCart, calculateTotals } = cartSlice.actions;