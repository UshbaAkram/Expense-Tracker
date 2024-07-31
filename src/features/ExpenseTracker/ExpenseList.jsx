import { useSelector } from "react-redux";
import React from 'react';
import ExpenseItem from './ExpenseItem'
const ExpenseList = () => {
    const expenses=useSelector((state)=>{return state.expense.value})
    console.log(expenses);
    return ( <div >
        <h1>Expense List</h1>
    
        { expenses.map((expnese)=>(
        <li key={expnese.id}>
            <ExpenseItem expense={expnese} />
        </li>
    ))}
    </div> );
}
 
export default ExpenseList;