import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddExpense from './features/ExpenseTracker/AddExpense'
import ExpenseList from './features/ExpenseTracker/ExpenseList'
import ExpenseSummary from './features/ExpenseTracker/ExpenseSummary'

function App() {

  return (
    <>
    <header className="App-header">
    <h1>Expense Tracker Application</h1>
    <AddExpense />
    <ExpenseList />
    <ExpenseSummary />
    </header>
    </>
    
  )
}

export default App
