import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function AddExpenditure() {


  const [itemOrService, setItemOrService] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const saveExpense = (e) => {
    e.preventDefault();

    if (itemOrService === "") {
      toast.error("Please Enter the purpose for this expense");
      return false
    } 
    else if (expenseAmount === "") {
      toast.error("Enter a value for amount");
      return false;
    } else if (category === "") {
      toast.error("Please choose a category");
      return false;
    } else if (notes === "") {
      toast.error("Please add a note for description");
      return false;
    } else if (expenseDate === "") {
      toast.error("Please add a date")
    }
    return true
  };

  return (
    <div className='addExpensesContainer'>
        <h3 id='addTitle'>Add Expenses</h3>
        
        <div className="expensesTotal">
          <h5>Display your daily expenses Total here</h5>
        </div>

        <form  className='addExpenseForm' onSubmit={saveExpense}>
          <label htmlFor="">Item Purchased or Service</label>
          <input type="text" name='itemOrService' placeholder='Please key in your purchased item or services here' inputMode='text'
           value={itemOrService} onChange={(e) => setItemOrService(e.target.value)}/>

          <label htmlFor="">Date</label>
          <input type="date" name='expenseDate' value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)}/>

          <label htmlFor="">Amount</label>
          <input type="number" name='expenseAmount' inputMode='numeric' value={expenseAmount}
           onChange={(e) => setExpenseAmount(e.target.value)} />

          <label htmlFor="">Note</label>
         <textarea name="expenseNote" id="" cols="30" rows="10"placeholder='Add your Notes here...' value={notes}
         onChange={(e) => setNotes(e.target.value)}></textarea>

          <label>Category</label>
                      
                    <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>Select</option>
                        <option value="food and drinks">Food and Drinks</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="transportation">transportation</option>
                        <option value="house and rent">House and Rent</option>
                        <option value="miscellaneous">Miscellaneous</option>

                    </select>
                    <button type="submit" onClick={saveExpense}>Save</button>
        </form>
    </div>
  )
}

export default AddExpenditure