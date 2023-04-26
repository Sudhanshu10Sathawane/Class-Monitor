import Axios from 'axios';
import {Bar} from'react-chartjs-2'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Colors} from 'chart.js'
import React, { useEffect, useState } from 'react'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Colors
)
const TopperChart = () => {
    const [userData,setData]=useState([]);
    const getData=async()=>{
      const res= await Axios.get("http://localhost:5001/api/class/students/per");
      console.log(res.data);
      setData(res.data);
    }
    useEffect(()=>{
      getData()
    },[]);
    var data={
        labels: userData?.avgMarks?.map(x=>x.roll_no),
        datasets:[{
            label: `${userData?.avgMarks?.length} Roll Number`,
            data: userData?.avgMarks?.map(x=>x.Percentage),
            barPercentage: 0.5,
            barThickness: 8,
            maxBarThickness: 8,
            minBarLength: 2,
            borderColor: '#FF6384',
            backgroundColor: '#FFB1C1',
        }]
    }
  return (
    <div className="w-[500px] h-[400px] shadow-lg shadow-blue-600">
    <Bar width="400px" height="100px" data={data?data:null} options={{maintainAspectRatio:false}}/>
    </div>
  )
}

export default TopperChart