import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        updateCartItem: (state: any, action: any) => {
            state.items = action.payload
        }
    }
})

export const { updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;