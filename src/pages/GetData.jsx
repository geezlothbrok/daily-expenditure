import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Table from "react-bootstrap/Table";
import Loader from "../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Edit from "./Edit";
import { toast } from "react-toastify";

function GetData() {
  const [expense, setExpense] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const expensesCollectionRef = collection(db, "expenses");

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setIsLoading(true);
    const getAllExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setExpense(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      

      setIsLoading(false);
      
    
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
        <tbody key={expense.id} >
      

          {
            expense.map((expense) => (
              <tr>
                <td> {expense.title} </td>
                <td>{expense.category}</td>
                <td>GHc {" " + expense.expenseAmount}</td>
                <td>{expense.notes}</td>
                <td>{expense.expenseDate}</td>
                
                <button onClick= {(() => navigate(`/update/${expense.id}`))}>Up</button>
                <button>view</button>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>EDIT EXPENSE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit />
        </Modal.Body>
        
      </Modal> */}
    </div>
  );
}

export default GetData;
