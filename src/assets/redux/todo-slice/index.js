import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
}
const todoslice = createSlice({
    name:"todo",
    initialState    ,
    reducers:{
     getdata(state,{payload}){
        state.data= [...state.data, {...payload, id: Date.now()}]
     },
    deleteTodo(state, { payload }) {
      state.data = state.data.filter((value) => value.id !== payload);
    },
    }
})
export const {getdata, deleteTodo } = todoslice.actions;
export default todoslice.reducer