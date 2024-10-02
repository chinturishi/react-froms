import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";
import Input from "./Input";

const ExpenseTable = ({
  expense,
  setExpense,
  setExpenses,
  editRowId,
  setEditRowId,
}) => {
  const [result, setQuery] = useFilter(expense, (data) => data.category);
  const total = result.reduce((acc, curr) => acc + Number(curr.amount), 0);
  const [menuPosition, setMenPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenPosition={setMenPosition}
        setExpense={setExpense}
        rowId={rowId}
        setExpenses={setExpenses}
        expense={expense}
        editRowId={editRowId}
        setEditRowId={setEditRowId}
      />
      <table className="expense-table" onClick={() => {
        if(menuPosition.left){
          setMenPosition({})
        }
      }}>
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setExpense((prev) =>
                      [...prev.sort((a, b) => a.amount - b.amount)]
                    );
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setExpense((prev) =>
                      [...prev.sort((a, b) => b.amount - a.amount)]
                    );
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => (
            <tr
              key={item.id}
              onContextMenu={(e) => {
                setRowId(item.id);
                e.preventDefault();
                setMenPosition({ left: e.clientX, top: e.clientY });
              }}
              // onDoubleClick={(e) => {
              //   console.log("Double clicked");
              //   console.log(expense);
              //   const editExpense = expense.find((i) => {
              //     console.log(item.id);
              //     return i.id === item.id;
              //   });
              //   console.log(editExpense);
              //   //editExpense.edittable = true;
              //   setExpense((prev) => [...prev, {...editExpense,edittable:true}]);
              // }}
            >
              {/* <td>{item.edittable ? <input /> : item.title}</td>
              <td>{item.edittable ? <input /> : item.category}</td>
              <td>₹{item.edittable ? <input /> : item.amount}</td> */}
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>₹{item.amount}</td>
            </tr>
          ))}

          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
