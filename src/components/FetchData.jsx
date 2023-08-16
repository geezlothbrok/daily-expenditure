import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import "./FetchData.css";

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

  return (
    <div className="allContainer">
      {expenses.map((expense) => {
        return (
          <ul key={expense.id} className="lists">
            <li id="listGap">
              
              <h3 className="title">Item bought or Service paid for :</h3> {expense.title}
            </li>
            <li id="listGap">
              <h3>Category: </h3> {expense.category}
            </li>
            <li id="listGap">
              <h3>Amount GHc:</h3> {expense.expenseAmount}
            </li>
            <li id="listGap">
              <h3>Reason for payment:</h3> {expense.notes}
            </li>
            <li id="listGap">
              
              <h3>
                <h3>Date:</h3>
              </h3>
              {expense.expenseDate}
            </li>
            <div className="twoButtons">
            <button className="editButton">edit</button>
            <button className="deleteButton">delete</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default FetchData;
