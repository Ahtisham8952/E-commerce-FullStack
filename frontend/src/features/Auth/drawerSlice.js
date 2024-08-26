import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
   
};

const cartDrawerSlice = createSlice({
    name: 'cartDrawer',
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isOpen = true;
        },
        closeDrawer: (state) => {
            state.isOpen = false;
        },
      
        
    },
});

export const { openDrawer, closeDrawer } = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
