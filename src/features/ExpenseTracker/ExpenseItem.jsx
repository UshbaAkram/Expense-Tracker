import { useDispatch } from "react-redux";
import { deleteExpense } from "./expenseSlice";

const ExpenseItem = ({expense}) => {
    const dispatch=useDispatch()
    console.log(expense);
    return ( <div className="item">
        <p>{expense.date}</p>
        <p>{expense.category}</p>
        <p>{expense.description}</p>
        <p>{expense.amount}</p>
        <button onClick={()=>dispatch(deleteExpense(expense.id))}>Remove</button>
    </div> );
}
 
export default ExpenseItem;