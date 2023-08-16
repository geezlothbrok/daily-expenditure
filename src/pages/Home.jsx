import React from 'react'
import FetchData from '../components/FetchData';
import "./Home.css"

function Home() {
  return (
    <>
    <div className='expenseListContainer'>
      <h1 className="headText">LIST OF ALL EXPENSES</h1>
        <FetchData/>
    </div>
    </>
  )
}

export default Home