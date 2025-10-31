import React from 'react'
import Card from './Card'

//using props//

function about() {
  const data = [
    { name: 'Full Stack Developer', content: 'Job description for full stack developer' },
    { name: 'Frontend Developer', content: 'Job description for frontend developer' },
    { name: 'Backend Developer', content: 'Job description for backend developer' }
    , { name: 'Data Scientist', content: 'Job description for data scientist' },
    { name: 'DevOps Engineer', content: 'Job description for DevOps engineer' },
    { name: 'DevOps Engineer', content: 'Job description for DevOps engineer' }
  ];

  // const detail ={
  //   name: 'Full Stack Developer',
  //   content: 'Job description for full stack developer'
  // }
  return (
    <div>
        

       {data.map((item, index) => (
          <Card key={index} name={item.name} content={item.content} />
       ))}
       {/* <Card name={detail.name} content={detail.content} /> */} 
       
      </div>
)}


export default about