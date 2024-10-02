import expenseData from "../expenseData";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState(expenseData);
  const [expenses, setExpenses] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editRowId, setEditRowId] = useState("");
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpense={setExpense}
            expenses={expenses}
            setExpenses={setExpenses}
            editRowId={editRowId}
            setEditRowId={setEditRowId}
          />
          <ExpenseTable
            expense={expense}
            setExpense={setExpense}
            setExpenses={setExpenses}
            editRowId={editRowId}
            setEditRowId={setEditRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
