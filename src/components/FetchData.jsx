import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import "./FetchData.css";
import { MdEdit} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri"
import { toast } from "react-toastify";

function FetchData() {
  const [expenses, setExpenses] = useState([]);

  const expensesCollectionRef = collection(db, "expenses");

  useEffect(() => {
    const getAllExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAllExpenses();
  }, []);

  const deleteExpense = async (id) => {
    const expenseDoc = doc(db, "expenses", id)
    await deleteDoc(expenseDoc)
{ deleteExpense ? toast.success("Expense has been deleted successfully") : toast.error("Something went wrong")}
  };

  return (
    <div className="allContainer">
      {expenses.map((expense) => {
        return (
          <ul key={expense.id} className="lists">
            <li id="listGap">
              
              <h3 className="title">Item bought or Service paid for :</h3> {expense.title}
            </li>
            <li id="listGap">
              <h3 className="title">Category: </h3> {expense.category}
            </li>
            <li id="listGap">
              <h3 className="title">Amount:</h3> <span> GHc: {expense.expenseAmount}</span>
            </li>
            <li id="listGap">
              <h3 className="title">Reason for payment:</h3> {expense.notes}
            </li>
            <li id="listGap">
              
              <h3 className="title">
                Date:
              </h3>
              {expense.expenseDate}
            </li>
            <div className="twoButtons">
            <button className="editButton">
              <MdEdit />
            </button>
            <button className="deleteButton" onClick={() => {deleteExpense(expense.id)}}>
              <RiDeleteBin6Line />
            </button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default FetchData;
