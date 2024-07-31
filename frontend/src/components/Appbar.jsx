import React from 'react'

const Appbar = () => {
  return (
    <div className="shadow-lg h-16 flex justify-between items-center bg-gradient-to-r from-blue-400 to-purple-500 px-4">
      <div className="text-white text-lg font-semibold">
        mini Pay
      </div>
      <div className="flex items-center">
        <div className="text-white text-sm font-medium mr-4">
          Hello
        </div>
        <div className="rounded-full h-12 w-12 bg-white flex items-center justify-center shadow-lg">
          <div className="text-xl text-blue-500 font-bold">
            U
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar
