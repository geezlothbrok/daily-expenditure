import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./AddExpenditure.css"

function AddExpenditure() {
  const [itemOrService, setItemOrService] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const expensesCollectionRef = collection(db, "expenses");
  const navigate = useNavigate();

  

  const createAnExpense = async (e) => {
    e.preventDefault();

     //VALIDATING ALL INPUT FIELDS

    if (itemOrService === "") {
      toast.error("Please Enter empty fields");
      return false;
    } else if (expenseAmount === "") {
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

    //ADDING EXPENSES TO THE FIRESTORE DATA BASE

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
            onChange={(e) => setItemOrService(e.target.value)}
          />

          <label>Date</label>
          <input
            type="date"
            name="expenseDate"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
          />

          <label>Amount GHc</label>
          <input
            type="number"
            name="expenseAmount"
            inputMode="numeric"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(Number(e.target.value))}
          />

          <label>Note</label>
          <textarea
            name="expenseNote"
            id=""
            cols="30"
            rows="10"
            placeholder="Add your Notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
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
          </select>
          <button type="submit" onClick={createAnExpense} id="submit">
            S a v e
          </button>
        </form>
      </div>
    </>
  );
}

export default AddExpenditure;
