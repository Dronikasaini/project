import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './data.js'


function Aboutdetail() {
const {kuchbbhi} = useParams();
const [user, setuser] = useState('')
console.log('data', data)

useEffect(()=>{
    const res = data.find (value=>value.phoneno == kuchbbhi); 
    console.log(res)
    setuser(res)
},[data])



  return (
    <>
    <div>Aboutdetail

        <p>{user.name}</p>
        <p>{user.phoneno}</p>
        <p>{user.email}</p>
    </div>
    
    
    </>
  
    
  )
}

export default Aboutdetail