import React from 'react';
import Table from './components/Table';
import NavBar from './components/NavBar';
import TopperChart from './components/TopperChart';
  
const App = () => {
  return (
    <>
      <NavBar/>
      <div className='flex flex-row'>
      <Table/>
      <div className='p-20'>
      <TopperChart/>
      </div>
      </div>
    </>
  )
}

export default App