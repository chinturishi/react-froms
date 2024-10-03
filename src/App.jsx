import expenseData from "../expenseData";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  //const [expense, setExpense] = useState(expenseData);
  const [expense, setExpense] = useLocalStorage('expense',[]);
  // const [expenses, setExpenses] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  // });
  const [expenses, setExpenses] = useLocalStorage("expenses",{
    title: "",
    category: "",
    amount: "",
  });
  //const [editRowId, setEditRowId] = useState("");
  const [editRowId, setEditRowId] = useLocalStorage("editRowId","");
  //const[data,setData]=useLocalStorage();
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
