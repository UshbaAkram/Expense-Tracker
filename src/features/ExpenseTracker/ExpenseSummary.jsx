import React from "react";
import { useSelector } from "react-redux";
const ExpenseSummary = () => {
    const expense=useSelector((state)=>state.expense.value);
    const total= expense.reduce((sum,expense)=>sum + expense.amount,0);
    const average=total / expense.length || 0
    // const expByCategory = expense.reduce((acc,expense)=>{
    //     if(!acc[expense.category]){
    //         acc[expense.category]=0
    //     }
    //     acc[expense.category] +=expense.amount;
    // },{})
    const expensesByCategory = expense.reduce((acc, expense) => {
        if (!acc[expense.category]) {
          acc[expense.category] = 0;
        }
        acc[expense.category] += expense.amount;
        return acc;
      }, {});
      
    return ( 
        <>
        <p>Total is {total}</p>
        <p>Average is {average}</p>
        <ul>
  {Object.keys(expensesByCategory).map((category) => (
    <li key={category}>
      {category}: ${expensesByCategory[category].toFixed(2)}
    </li>
  ))}
</ul>

        </>
     );
}
 
export default ExpenseSummary;