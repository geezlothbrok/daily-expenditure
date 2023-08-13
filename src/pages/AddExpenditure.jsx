import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddExpenditure() {
  const [itemOrService, setItemOrService] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const expensesCollectionRef = collection(db, "expenses");
  const navigate = useNavigate();

  //VALIDATING ALL INPUT FIELDS
  const saveExpense = (e) => {
    e.preventDefault();

    if (itemOrService === "") {
      toast.error("Please Enter empty fiels");
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
    // return true
    setIsLoading(true);
  };


  //ADDING EXPENSES TO THE FIRESTORE DATA BASE

  const createAnExpense = async () => {
    await addDoc(expensesCollectionRef, {
      title: itemOrService,
      expenseDate,
      expenseAmount,
      notes,
      category,
    });
    setIsLoading(false);
    toast.success("Today's expenses added successfully");
    navigate("/");
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="addExpensesContainer">
        <h3 id="addTitle">Add Expenses</h3>

        <div className="expensesTotal">
          <h5>Display your daily expenses Total here</h5>
        </div>

        <form className="addExpenseForm" onSubmit={saveExpense}>
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

          <label>Amount</label>
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

          <label>Category</label>

          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select
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
          <button type="submit" onClick={createAnExpense}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddExpenditure;
