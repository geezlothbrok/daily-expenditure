import React from 'react'
import FetchData from '../components/FetchData';
import "./Home.css"

function Home({title}) {
  return (
    <>
    <div className='expenseListContainer'>
        <FetchData/>
    </div>
    </>
  )
}

export default Home