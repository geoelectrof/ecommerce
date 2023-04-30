import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const offCanvasSlice = createSlice({
    name: 'offCanvas',
    initialState,
    reducers: {
        openOffCanvas: (state) => {
            state.open = true
        },
        closeOffCanvas: state => {
            state.open = false
        }
    }
})

export default offCanvasSlice.reducer
export const { openOffCanvas, closeOffCanvas } = offCanvasSlice.actions