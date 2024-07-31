import React,{ useState } from "react";
import {useDispatch} from 'react-redux';
import {addExpense} from './expenseSlice'
const AddExpense = () => {
  const [category, setcategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

const dispatch= useDispatch();
const handelSubmit=(e)=>{
    e.preventDefault()
    const data={
        id:Date.now(),
        category,
        amount: parseFloat(amount),
        date,
        description,
    }
    dispatch(addExpense(data));
    setDate('');
    setcategory('');
    setAmount('');
    setDescription('');
}
  
  return (
    <div>
        <form onSubmit={handelSubmit}>
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        placeholder="Expense Category"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Expense Amount"
      />
        <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
    
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExpense;
