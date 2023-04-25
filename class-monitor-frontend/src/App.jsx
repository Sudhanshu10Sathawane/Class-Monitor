import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import Table from './components/Table';
  
const App = () => {
  const [userData,setData]=useState();
  const getData=async()=>{
    const res= await Axios.get("http://localhost:5001/api/class/students");
    setData(res.data);
    console.log(res);
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <div className='container'>
      <Table saman={userData}/>
    </div>
  )
}

export default App