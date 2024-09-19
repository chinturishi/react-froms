import React, { useState } from "react";

const ExpenseForm = ({ setExpense }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState({
    id:crypto.randomUUID(),
    title: "",
    category: "",
    amount: ""
  });

  const handleSubmit = (e) => {
    console.log("inside handleSubmit");
    e.preventDefault();
    // const data=getFormData(e.target);
    // setExpense((prevState)=>[...prevState,{...data,id:crypto.randomUUID()}]);
    // e.target.reset();

    const expense={title,category,amount,id:crypto.randomUUID()};
    setExpense((prevState)=>[...prevState,expense]);
    setTitle("");
    setCategory("");
    setAmount("");
  };

  const getFormData = (form) => {
    const formdata = new FormData(form);
    const data = {};
    for (const [key, value] of formdata.entries()) {
      data[key] = value;
    }
    console.log(data);
    return data;
  };

  return (
    <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option hidden value="">
            All
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
