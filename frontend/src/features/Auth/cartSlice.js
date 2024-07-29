import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{

        add(state, action) {
            const productIndex = state.findIndex(item => item.id === action.payload.id);
            if (productIndex === -1) {
                state.push({ ...action.payload, quantity: 1 });
            } else {
                state[productIndex].quantity += 1;
            }
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }
    }

})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;