import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 0,
  total: 55,
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
  },
});

console.log(cartSlice)

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;