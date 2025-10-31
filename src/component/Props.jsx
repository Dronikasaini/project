import React from 'react';

function Props({ hello }) {
  return (
    <div className='h-50 w-50 bg-amber-500 flex gap-6 mb-3'>
      <h1>{hello}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  );
}

export default Props;
