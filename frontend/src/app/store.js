import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../features/Auth/cartSlice"
import cartDrawerReducer from "../features/Auth/drawerSlice"
const store=configureStore({

    reducer:{
       cart: cartReducer,
       cartDrawer: cartDrawerReducer,
    }

    
})

export default store