import React from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./AddExpenditure.css"

const expenseDetails = {
    itemOrService: "",
    expenseAmount: "",
    expenseDate: "",
    notes: "",
    category: "",
  }

function AddExpenditure() {

  const [expenses, setExpense] = useState(expenseDetails);
  const {itemOrService, expenseAmount, expenseDate, notes, category} = expenses;
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => { 
    setExpense({...expenses, [e.target.name]: e.target.value})
  };

  const expensesCollectionRef = collection(db, "expenses");
  const navigate = useNavigate();

  const createAnExpense = async (e) => {
    e.preventDefault();

     //VALIDATING ALL INPUT FIELDS

    if (itemOrService === "") {
      toast.error("Please Enter empty fields");
      return false;
    } else if (expenseAmount <= 0) {
      toast.error("Enter a value for amount");
      return false;
    } else if (category === "") {
      toast.error("Please choose a category");
      return false;
    } else if (notes === "") {
      toast.error("Please add a note for description");
      return false;
    } else if (expenseDate === "") {
      toast.error("Please add a date");
    }
    
    setIsLoading(true);

    //ADDING EXPENSES TO THE FIRESTORE DATABASE

    await addDoc(expensesCollectionRef, {
      title: itemOrService, 
      expenseDate,
      expenseAmount,
      notes,
      category,
    });
    setIsLoading(true);
    toast.success("Today's expenses added successfully");
    setIsLoading(false)
    navigate("/");
  };

  
  return (
    
      <>
      {isLoading && <Loader />}
      <div className="addExpensesContainer">
        <h3 id="addTitle">Add Expenses</h3>

        <div className="expensesTotal">
          <h5>GHc 300. 00</h5>
          <span> spent today</span>
        </div>

        <form className="addExpenseForm" onSubmit={createAnExpense}>
          <label>Item Purchased or Service</label>
          <input
            type="text"
            name="itemOrService"
            placeholder="Please key in your purchased item or services here"
            inputMode="text"
            value={itemOrService}
            onChange={handleChange}
          />

          <label>Date</label>
          <input
            type="date"
            name="expenseDate"
            value={expenseDate}
            onChange={handleChange}
          />

          <label>Amount GHc</label>
          <input
            type="number"
            name="expenseAmount"
            inputMode="numeric"
            value={expenseAmount}
            onChange={handleChange}
          />

          <label>Note</label>
          <textarea
          className="textArea"
          spellCheck={true}
            name="notes"
            id=""
            cols="30"
            rows="10"
            placeholder="Add your Notes here..."
            value={notes}
            onChange={handleChange}
          ></textarea>

          <select name="category" value={category} onChange={handleChange} >
            <option value="" disabled>
              Choose Category
            </option>
            <option value="food and drinks">Food and Drinks</option>
            <option value="maintenance">Maintenance</option>
            <option value="transportation">transportation</option>
            <option value="house and rent">House and Rent</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="fashion">Fashion</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="utilities">Utilities</option>
            <option value="electronics">Electronics</option>
          </select>
          <button type="submit" onClick={createAnExpense} id="submit">
            S a v e
          </button>
        </form>
      </div>
    </>
   
  )
}

export default AddExpenditure