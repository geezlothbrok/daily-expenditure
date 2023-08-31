import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Loader from '../components/loader/Loader';

function GetData() {
  const [expense, setExpense] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const expensesCollectionRef = collection(db, "expenses"); 

   

    useEffect(() => {
      setIsLoading(true)
      const getAllExpenses = async () => {
        const data = await getDocs(expensesCollectionRef);
        setExpense(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       
        setIsLoading(false)
      };
  
      getAllExpenses();
      
       
    }, []);
  return (
   <div className="listContainer">
    
    {isLoading && <Loader />}
    
    <Table striped bordered hover>
    <thead>
        <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Price </th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody key={expense.id}>
      {expense && expense.map((expense) => (
        <tr>
        <td> {expense.title} </td>
        <td>{expense.category}</td>
        <td>GHc { " " + expense.expenseAmount}</td>
        <td>{expense.notes}</td>
        <td>{expense.expenseDate}</td> 
        <button>del</button>
        <button>Up</button>
      </tr>
     
      ))}
       
      </tbody>
     
    </Table>

   
   </div>
  )
}

export default GetData;