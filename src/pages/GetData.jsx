import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Table from "react-bootstrap/Table";
import Loader from "../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Edit from "./Edit";
import { ImBin } from "react-icons/im";
import { BiSolidPencil } from "react-icons/bi";

function GetData() {
  const [expense, setExpense] = useState([]);
  const [expenditure, setExpenditure] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const expensesCollectionRef = collection(db, "expenses");

  const navigate = useNavigate();

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (expense) => {
    setShow(true);
    setExpenditure(expense);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this expenditure?")) {
      try {
        setShow(false);
        await deleteDoc(doc(db, "expenses", id));
        setExpense(expense.filter((expenditure) => expenditure.id !== id))
        console.log(expenditure);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
                
                <button onClick= {(() => navigate(`/update/${expense.id}`))}>
                  <BiSolidPencil />
                </button>

                <button onClick= {(() => handleShow(expense))}>view</button>
                <button onClick={() => {
                  handleDelete(expense.id);
                  
                }}>
                  <ImBin />
                </button>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {show && (
           <Edit 
          
           {...expenditure} 
           />
         )}
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GetData;
