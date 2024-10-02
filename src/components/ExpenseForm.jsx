import React, { useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpense,
  expenses,
  setExpenses,
  editRowId,
  setEditRowId,
}) => {
  const [errors, setErrors] = useState({});
  const options = [
    { value: "grocery", text: "Grocery" },
    { value: "clothes", text: "Clothes" },
    { value: "bills", text: "Bills" },
    { value: "education", text: "Education" },
    { value: "medicine", text: "Medicine" },
  ];
  const validationConfig = {
    title: [
      {
        required: true,
        message: "Title is required",
      },
      {
        minLength: 5,
        message: "Title should be atleast 5 characters",
      },
    ],
    category: [
      {
        required: true,
        message: "Category is required",
      },
    ],
    amount: [
      {
        required: true,
        message: "Amount is required",
      },
      {
        numberOnly: /^\d+$/,
        message: "Amount should be a number",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.numberOnly && !rule.numberOnly.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
      });
    });
    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expenses);
    if (Object.keys(validateResult).length) {
      return;
    }
    if (editRowId) {
      setExpense((prev)=>
        prev.map((expenseItem)=>{
          if(expenseItem.id===editRowId){
          return {...expenses, id:editRowId};
          }
          return expenseItem;
        })
      )
      setEditRowId("");
      setExpenses({ title: "", category: "", amount: "" });
      return;
    }
    setExpense((prevState) => [
      ...prevState,
      { ...expenses, id: crypto.randomUUID() },
    ]);
    setExpenses({ title: "", category: "", amount: "" });
  };

  // const getFormData = (form) => {
  //   const formdata = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formdata.entries()) {
  //     data[key] = value;
  //   }
  //   console.log(data);
  //   return data;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        lable="Title"
        id="title"
        name="title"
        value={expenses.title}
        onChange={handleChange}
        error={errors.title}
      ></Input>
      <Select
        id="category"
        lable="Category"
        name="category"
        value={expenses.category}
        Onchange={handleChange}
        options={options}
        error={errors.category}
        defaultOption="Select Category"
      ></Select>
      <Input
        lable="Amount"
        id="amount"
        name="amount"
        value={expenses.amount}
        onChange={handleChange}
        error={errors.amount}
      ></Input>
      <button className="add-btn">{editRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
