import {configureStore} from '@reduxjs/toolkit'
import expenseReducer from '../features/ExpenseTracker/expenseSlice'
export const store=configureStore({
    reducer:{
        expense: expenseReducer,
    }
})