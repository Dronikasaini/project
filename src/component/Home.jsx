import React from 'react'
import data from './data.js'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  console.log('data : ', data);
  return (
    <>
    
      <h3 className='font-semibold text-3xl text-zinc-300 underline text-center'>sending 1 data and reciving on other page!</h3>
     <div className='flex flex-wrap justify-center items-center'>
      {data.map((value , index) => (
      <div
      key={index } className='bg-blue-100 w-64 p-4 m-2 rounded-lg shadow-lg'
      onClick={()=>navigate(`/home/${value.phoneno}`)}
      >
        <h4 className='text-2xl font-bold'>{value.name}</h4>
        <p className='text-lg'>Email: {value.email}</p>
        <p className='text-lg'>Phone: {value.phoneno}</p>
        
      </div>
     ))}
     </div>       
    </>
  )
}

export default Home