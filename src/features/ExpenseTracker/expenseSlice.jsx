import {createSlice} from '@reduxjs/toolkit'
const expenseSlice = createSlice({
    name:'expense',
    initialState:{
        value:[ ],
    },
    reducers:{
        addExpense:(state,action)=>{   
            console.log(action.payload);
            state.value=[...state.value, action.payload]
            // state.value=action.payload
            // state.value.push(action.payload);
            console.log("action update",state.value);
        },
        deleteExpense:(state,action)=>{
           state.value= state.value.filter((expense)=>expense.id!==action.payload)
        },
    },
})
export const {addExpense, deleteExpense}=expenseSlice.actions;
export default expenseSlice.reducer
