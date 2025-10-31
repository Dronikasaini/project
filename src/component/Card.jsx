import React from 'react'

function Card({name, content , key}) {
  return (
    <>
      <div key={key} className='w-56 bg-teal-400 p-4 rounded-lg shadow-md'>
        <h2 className='text-lg sm:text-xl font-bold mb-2'>{name}</h2>
        <p className='text-gray-600'>{content}</p>
      </div>
    </>
  )
}

export default Card