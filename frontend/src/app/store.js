import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../features/Auth/cartSlice"
const store=configureStore({

    reducer:{
       cart: cartReducer
    }

    
})

export default store