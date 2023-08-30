import React, { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/config';

function GetData() {
  const [expense, setExpense] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    

   

    useEffect(() => {
      setIsLoading(true)
        const getExpenses = onSnapshot(
          collection(db, "expenses"),
          (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setExpense(list);
            setIsLoading(false);
          },
          (error) => {
            toast.error(error)
          }
        );

        return () => {
          getExpenses();
        };
       
    }, []);
  return (
    <div>GetData</div>
  )
}

export default GetData;