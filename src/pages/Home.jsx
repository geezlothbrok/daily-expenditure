import React from 'react'
import GetData from './GetData';
import "./Home.css"
import Chart from '../components/Chart';


function Home() {
  return (
    
    <div className='mainContainer'>

      <div className="listContainer">
        <h3 className="headText">LIST OF ALL EXPENSES</h3>
        <GetData />
      </div>

      <div className="chartContainer">
        <Chart />
      </div>
      
      
    </div>
    
  )
}

export default Home