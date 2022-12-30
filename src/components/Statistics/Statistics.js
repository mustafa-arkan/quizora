import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import axios from 'axios'

const Statistics = () => {

    const[statiss,setStatiss]=useState([])

useEffect(()=>{

axios.get('https://openapi.programming-hero.com/api/quiz')
.then(data=>{

const statisLoaded=data.data.data
const statisData=statisLoaded.map(statis=>{


const singlename={

Name:statis.name,
TotalQuiz:statis.total

}
return singlename


})

console.log(statisData)
setStatiss(statisData)

})





} ,[])



    return (
       

<div>

<div className='mb-5 text-2xl'>
<h3>Statistics of our Quiz</h3>


</div>

<div className=''>



<BarChart className='container mt-5 pt-5' width={500} height={400} data={statiss} >
          <Bar dataKey="TotalQuiz" fill="#8884d8" />
          <XAxis dataKey="Name" />

          <YAxis />
          <Tooltip />


        </BarChart>
</div>

<div className=' text-xl'>


  Subject vs Quiz number statistics
</div>

</div>



    );
};

export default Statistics;