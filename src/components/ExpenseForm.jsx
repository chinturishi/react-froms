import React, { useRef, useState } from "react";

const ExpenseForm = ({ setExpense }) => {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const[errors,setErrors]=useState({});
  const myref = useRef("hi");
  console.log(myref);

  const validate=(formData)=>{
    const errorData={};
    if(!formData.title){
      errorData.title="Title is required";
    }
    if(!formData.category){
      errorData.category="Category is required";
    }
    if(!formData.amount){
      errorData.amount="Amount is required";
    }
    setErrors(errorData);
    return errorData;
  }

  const handleSubmit = (e) => {
    console.log("inside handleSubmit");
    e.preventDefault();
    // const data=getFormData(e.target);
    // setExpense((prevState)=>[...prevState,{...data,id:crypto.randomUUID()}]);
    // e.target.reset();

    //const expense={title,category,amount,id:crypto.randomUUID()};
    const validateResult=validate(expenses);
    if(Object.keys(validateResult).length){
      return;
    }
    setExpense((prevState) => [
      ...prevState,
      { ...expenses, id: crypto.randomUUID() },
    ]);
    setExpenses({ title: "", category: "", amount: "" });
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
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expenses.title}
          onChange={handleChange}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expenses.category}
          onChange={handleChange}
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expenses.amount}
          onChange={handleChange}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
