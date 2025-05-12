import { createSlice } from "@reduxjs/toolkit";

const conterslice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
increment(state){
state.count = state.count +=1;
},
decrement(state){
state.count = state.count -=1;
},
},
})
export const {increment, decrement} = conterslice.actions;
export default conterslice.reducer 