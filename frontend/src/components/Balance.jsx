import React from 'react'

const Balance = ({ value }) => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-lg shadow-md m-3'>
      <div className='text-white text-lg font-bold'>
        Your Balance
      </div>
      <div className='text-white text-2xl font-semibold mt-2'>
        Rs {value}
      </div>
    </div>
  )
}

export default Balance
