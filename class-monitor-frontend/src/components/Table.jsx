import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const Table = () => {
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
    <div className='justify-left'>
    <table className='shadow-2xl'>
        <thead className='p-4 bg-yellow-400 border-spacing-1'>
          <tr>
            <th className='py-4 p-3 '>Name</th>
            <th className='py-4 p-3 '>Roll No</th>
            <th className='py-4 p-3 '>English</th>
            <th className='py-4 p-3 '>Hindi</th>
            <th className='py-4 p-3 '>Maths</th>
            <th className='py-4 p-3 '>Social Science</th>
            <th className='py-4 p-3 '>Science</th>
          </tr>
        </thead>
        <tbody className='text-center'>
        {userData &&
          userData.map(({marks,name,roll_no,_id})=>(
              <tr key={_id} className='w-full hover:bg-cyan-400 odd:bg-pink-200 even:bg-blue-200 cursor-pointer duration-300 '>
                  <td className='p-4 '>{roll_no}</td>
                  <td className='p-4 '>{name}</td>
                  <td className='p-4 '>{marks["English"]}</td>
                  <td className='p-4 '>{marks["Maths"]}</td>
                  <td className='p-4 '>{marks["Hindi"]}</td>
                  <td className='p-4 '>{marks["Social Science"]}</td>
                  <td className='p-4 '>{marks["Science"]}</td>
              </tr>
          ))
        }
      </tbody>
      </table>
      </div>
  )
}

export default Table;