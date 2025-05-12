import { configureStore } from "@reduxjs/toolkit";
import conterslice from './conter-js'
import todoslice from "./todo-slice"
export const store = configureStore({
    reducer:{
        conterslice,
        todoslice,
    },

})