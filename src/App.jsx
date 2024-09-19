import expenseData from '../expenseData';
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { useState } from 'react'

function App() {
  const [expense, setExpense] = useState(expenseData);
  return (  
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpense={setExpense}/>
        <ExpenseTable expense={expense}/>
      </div>
    </main>
    </>
  )
}

export default App
