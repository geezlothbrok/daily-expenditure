import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Bar,  } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import { db } from '../firebase/config';

function Chart() {
  const [expense, setExpense] = useState([]);

  // const [chartData, setChartData] = useState({
  //   labels: expense.map((data) => data.category),
    
  //   datasets: [{
  //     label: "testing",
  //     data: expense.map((data) => data.expenseAmount)
  //   }]
  // })

  const expensesCollectionRef = collection(db, "expenses");

  useEffect(() => {
    const getAllExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setExpense(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));  
    };
    getAllExpenses();
  }, []);
 
  return (
    <div>
      <Bar data={{labels: expense.map((data) => data.category),
      datasets: [{
             label: "testing",
             data: expense.map((data) => data.expenseAmount)
           }]
      }}/>
    </div>
  )
}

export default Chart