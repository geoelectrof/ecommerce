import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import offCanvasReducer from './features/offCanvas/offCanvasSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        offCanvas: offCanvasReducer,
    },
})