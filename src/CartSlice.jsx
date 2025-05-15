import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            // Deconstruct
            const {name, image, cost} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if(existingItem){
                existingItem.quantity += 1;
            }else {
                state.items.push({name, image, cost, quantity:1});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        updateQuantity: (state, action) => {
            // Deconstruct 
            const {name, quantity} = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if(itemToUpdate){
                itemToUpdate.quantity = quantity;
            }
        
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.items.find(item => item.name === action.payload.name);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.items.find(item => item.name === action.payload.name);
            if (itemToDecrease && itemToDecrease.quantity > 0) {
              itemToDecrease.quantity -= 1;
            }
          },
    },
});

export const { addItem, removeItem, updateQuantity, increaseItemQuantity,decreaseItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;
